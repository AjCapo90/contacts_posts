function Menu(props) {
  return(
    <div className="menu">
      <button 
        className="menu--contacts">
        Contacts
      </button>
      <button 
        className={props.isInContactSection ? "menu--posts disabled" : "menu--posts"}
        disabled={props.isInContactSection ? true : false}>
        Posts
      </button>
      <button className="menu--logout">Logout</button>
    </div>
  )
}

export default Menu