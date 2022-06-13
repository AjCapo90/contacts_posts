import {Link} from "react-router-dom"

function Menu(props) {
  return(
    <div className="menu">
      <button 
        className="menu--contacts">
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
      <button className="menu--logout">Logout</button>
    </div>
  )
}

export default Menu