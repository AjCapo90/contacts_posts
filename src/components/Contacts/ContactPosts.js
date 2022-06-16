import {Link} from "react-router-dom"

function ContactPosts(props) {
  return (
    <Link to={`/post_list/post/${props.id}`} style={{textDecoration: 'none'}}>
      <div className="contact_post">
        <h3 className="contact_post--title">{props.title}</h3>
        <p className="contact_post--body">{props.body}</p>
      </div>
    </Link>
  )
}

export default ContactPosts
