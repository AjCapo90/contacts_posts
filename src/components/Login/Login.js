
import {Link} from "react-router-dom"
import {useEffect, useState} from "react"
import LoginInput from "./LoginInput"
import {emailValidation, lengthValidation} from "../../utils/Functions"


function Login(props) {

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  })

  const [checkEmail, setCheckEmail] = useState(false)
  const [checkPassword, setCheckPassword] = useState(false)

  // CHECK INPUT CONDITIONS 
  useEffect(() => {
    emailValidation(userCredentials.email, setCheckEmail)
    lengthValidation(userCredentials.password, 4, setCheckPassword)
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

  // SAVE CREDENTIALS IN LOCAL STORAGE WHEN LOGIN IN CLICKED & CHANGE STATE IN APP "ISLOGGEDIN"
  function login() {
    localStorage.setItem('token', JSON.stringify(userCredentials))
    props.handleLogin()
  }

  return (
    <section className="login">
      <h1 className="login--title">Login</h1>
      <form className="login--form" onSubmit={handleSubmit}>
        <LoginInput 
          type="email"
          name="email"
          handleChange={handleChange}
          userCredentials={userCredentials.email}
          isChecked={checkEmail}
          isRequired={true}
        />
        <LoginInput 
          type="password"
          name="password"
          handleChange={handleChange}
          userCredentials={userCredentials.password}
          isChecked={checkPassword}
          isRequired={true}
        />
        <Link to={"/contact_list"}>
          <button 
            className={checkEmail && checkPassword ? "login--submit" : "login--submit_disabled"} 
            disabled={!checkEmail && !checkPassword}
            onClick={login}
            >
          enter
          </button>
        </Link>
      </form>
    </section>
  )
}

export default Login