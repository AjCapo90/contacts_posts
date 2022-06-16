import {Link} from "react-router-dom"

function Menu(props) {

  function logout() {
    localStorage.removeItem('token')
    props.handleLogout()
  }

  return(
    <div className="menu">
      <button 
        className={!props.isInContactSection ? "menu--contacts disabled" : "menu--contacts"}>
        <Link to="/contact_list" style={{textDecoration: 'none'}}>
        Contacts
        </Link>
      </button>
      <button 
        className={props.isInContactSection ? "menu--posts disabled" : "menu--posts"}
        // disabled={props.isInContactSection ? true : false}
        > 
        <Link to="/post_list" style={{textDecoration: 'none'}}>
        Posts
        </Link>
      </button>
      <button 
        className="menu--logout"
        onClick={logout}>
        <Link to="/" style={{textDecoration: 'none'}}>
          Logout
        </Link>
      </button>
    </div>
  )
}

export default Menu