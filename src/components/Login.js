
import {Link} from "react-router-dom"
import {useEffect, useState} from "react"
import LoginInput from "./LoginInput"


function Login(props) {

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  })

  const [checkEmail, setCheckEmail] = useState(false)
  const [checkPassword, setCheckPassword] = useState(false)

  function emailValidation() {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      regex.test(userCredentials.email) ? setCheckEmail(true) : setCheckEmail(false)
  }
  
  function passwordValidation() {
      userCredentials.password.length >= 4 ? setCheckPassword(true) : setCheckPassword(false)
  }

  // CHECK INPUT CONDITIONS 
  useEffect(() => {
    emailValidation()
    passwordValidation()
  }, [userCredentials])

  // HANDLE CREDENTIALS CHANGE
  function handleChange(event) {
    const {name, value} = event.target
    setUserCredentials(prevCredentials => ({
      ...prevCredentials,
      [name]: value
    }))
  }

  // HANDLE FORM SUBMIT
  function handleSubmit(event) {
    event.preventDefault()
  }

  // SAVE CREDENTIALS IN LOCAL STORAGE WHEN LOGIN IN CLICKED
  function setLocalStorage() {
    localStorage.setItem('token', JSON.stringify(userCredentials))
  }

  return (
    <section className="login">
      <h1 className="login--title">Login</h1>
      <form className="login--form" onSubmit={handleSubmit}>
        <LoginInput 
          type="email"
          handleChange={handleChange}
          userCredentials={userCredentials.email}
          isChecked={checkEmail}
        />
        <LoginInput 
          type="password"
          handleChange={handleChange}
          userCredentials={userCredentials.password}
          isChecked={checkPassword}
        />
        <Link to={"/contact_list"}>
          <button 
            className={checkEmail && checkPassword ? "login--submit" : "login--submit_disabled"} 
            disabled={!checkEmail && !checkPassword}
            onClick={setLocalStorage}
            >
          enter
          </button>
        </Link>
      </form>
    </section>
  )
}

export default Login