import Login from "./components/Login"
import ContactList from "./components/ContactList"
import ContactDetail from "./components/ContactDetail"
import PostList from "./components/PostList"
import PostDetail from "./components/PostDetail"
import {useState} from "react"
import {Routes, Route} from "react-router-dom"

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleLogin() {
    setIsLoggedIn(prevIsLoggedIn => !prevIsLoggedIn)
  }

  return (
    <Routes>
      <Route exact path="/" element={
        <Login 
          handleLogin={handleLogin}
          isLoggedIn={isLoggedIn}
        />} />
      <Route exact path="/contact_list" element={<ContactList />} />
      <Route path="/contact_list/:contactId" element={<ContactDetail />} />
      <Route path="/post_list" element={<PostList />} />
      <Route path="/post_list/post/:postId" element={<PostDetail />} />
    </Routes> 
  )
}

export default App