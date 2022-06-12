import {Link} from "react-router-dom"

function ContactItems(props) {
   
  function getInitials(name) {
    return name.split(" ").map(el => el.charAt(0))
  }
  
  return (
    <Link to={`/contact_list/${props.id}`}>
      <div className="contact_list--item">
        <div className="contact_list--initials">{getInitials(props.name)}</div>
        <div className="contact_list--info">
          <p className="contact_list--name">{props.name}</p>
          <p className="contact_list--address">{props.street} | {props.city}</p>
        </div>
      </div>
    </Link>
  )
}

export default ContactItems