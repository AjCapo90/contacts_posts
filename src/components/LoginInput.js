import {useState, useEffect} from "react"
import {capitalizeFirstLetter} from "../utils/Functions"

function LoginInput(props) {

  return (
    <div className="login--input">
      <label 
        htmlFor={props.name} 
        className="login--label">{capitalizeFirstLetter(props.name)}
      </label>
      {props.isRequired ? <p className="login--required">Required</p> : ""}
      <input 
        type={props.type}
        placeholder={`Insert a valid ${props.type}`} 
        id={props.name} 
        className={props.isChecked ? "login--username_input" : "login--username_wrong_input"}
        name={props.name}
        onChange={props.handleChange}
        value={props.userCredentials}
      />
    </div>
  )
}

export default LoginInput