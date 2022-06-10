import Login from "./components/Login"
import ContactList from "./components/ContactList"
import {useState} from "react"
import {Routes, Route} from "react-router-dom"

function App() {

  const [correctCredentials, setCorrectCredentials] = useState({
    email: "ajcapo90@gmail.com",
    password: "abc123"
  })

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleLogin() {
    setIsLoggedIn(prevIsLoggedIn => !prevIsLoggedIn)
  }

  return (
    <Routes>
      <Route exact path="/" element={
        <Login 
          correctCredentials={correctCredentials}
          handleLogin={handleLogin}
          isLoggedIn={isLoggedIn}
        />} />
      <Route path="/contact_list" element={<ContactList />} />
    </Routes> 
  )
}

export default App