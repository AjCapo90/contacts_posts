import {useState, useEffect} from "react"

function LoginInput(props) {

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="login--input">
      <label 
        htmlFor={props.type} 
        className="login--label">{capitalizeFirstLetter(props.type)}
      </label>
      <p className="login--required">Required</p>
      <input 
        type={props.type}
        placeholder={`Insert a valid ${props.type}`} 
        id={props.type} 
        className={props.isChecked ? "login--username_input" : "login--username_wrong_input"}
        name={props.type}
        onChange={props.handleChange}
        value={props.userCredentials}
      />
    </div>
  )
}

export default LoginInput