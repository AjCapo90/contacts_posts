
  function emailValidation(email, changeState) {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      regex.test(email) ? changeState(true) : changeState(false)
  }
  
  function lengthValidation(pwd, nr, changeState) {
      pwd.length >= nr ? changeState(true) : changeState(false)
  }

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function getInitials(name) {
    return name.split(" ").map(el => el.charAt(0))
  }

export {emailValidation, lengthValidation, capitalizeFirstLetter, getInitials}

