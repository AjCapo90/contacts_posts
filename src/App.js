/*
import Login from "./components/Login"
import ContactList from "./components/ContactList"
import ContactDetail from "./components/ContactDetail"
import PostList from "./components/PostList"
import PostDetail from "./components/PostDetail"
*/
import {useState} from "react"
import {Routes, Route} from "react-router-dom"
import loadable from '@loadable/component'
import GuardedRoute from "./utils/RoutedRoute"

const Login = loadable(() => import("./components/Login"))
const ContactList = loadable(() => import("./components/ContactList"))
const ContactDetail = loadable(() => import("./components/ContactDetail"))
const PostList = loadable(() => import( "./components/PostList"))
const PostDetail = loadable(() => import("./components/PostDetail"))

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleLogin() {
    setIsLoggedIn(prevIsLoggedIn => !prevIsLoggedIn)
  }

  console.log(isLoggedIn)

  return (
    <Routes>

      <Route
        exact path="/" 
        element={<Login handleLogin={handleLogin}/>} 
      />
      <Route 
        exact path="/contact_list" 
        element={<GuardedRoute component={ContactList} auth={isLoggedIn} changeAuth={handleLogin}/>} 
      />
      <Route 
        path="/contact_list/:contactId" 
        element={<GuardedRoute component={ContactDetail} auth={isLoggedIn} changeAuth={handleLogin}/>}
      />
      <Route 
        path="/post_list" 
        element={<GuardedRoute component={PostList} auth={isLoggedIn} changeAuth={handleLogin}/>}
      />
      <Route 
        path="/post_list/post/:postId" 
        element={<GuardedRoute component={PostDetail} auth={isLoggedIn} changeAuth={handleLogin}/>}
        />
      {/*
      <Route exact path="/" element={
        <Login 
          handleLogin={handleLogin}
          isLoggedIn={isLoggedIn}
        />} />
      <Route exact path="/contact_list" element={<ContactList />} />
      <Route path="/contact_list/:contactId" element={<ContactDetail />} />
      <Route path="/post_list" element={<PostList />} />
      <Route path="/post_list/post/:postId" element={<PostDetail />} />
      */}
    </Routes> 
  )
}

export default App