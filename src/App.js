import {useState} from "react"
import {Routes, Route} from "react-router-dom"
import loadable from '@loadable/component'
import GuardedRoute from "./utils/RoutedRoute"

const Login = loadable(() => import("./components/Login/Login"))
const ContactList = loadable(() => import("./components/Contacts/ContactList"))
const ContactDetail = loadable(() => import("./components/Contacts/ContactDetail"))
const PostList = loadable(() => import( "./components/Posts/PostList"))
const PostDetail = loadable(() => import("./components/Posts/PostDetail"))

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleLogin() {
    setIsLoggedIn(prevIsLoggedIn => !prevIsLoggedIn)
  }

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

    </Routes> 
  )
}

export default App