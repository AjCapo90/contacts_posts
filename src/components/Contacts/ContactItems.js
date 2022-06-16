import {Link} from "react-router-dom"
import {getInitials} from "../../utils/Functions"

function ContactItems(props) {
  
  return (
    <Link to={`/contact_list/${props.id}`} style={{textDecoration: 'none'}}>
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