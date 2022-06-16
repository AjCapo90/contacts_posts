import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import LoginInput from "./LoginInput"
import ContactPosts from "./ContactPosts"
import Menu from "./Menu"
import {emailValidation, lengthValidation, getInitials} from "../utils/Functions"


function ContactDetail(props) {
  const {contactId} = useParams()
  const [thisContact, setThisContact] = useState({
    name: "",
    email: "",
    company: {
      name: ""
    }
  })

  const [thisContactPosts, setContactPosts] = useState([])

  const [checkEmail, setCheckEmail] = useState(false)
  const [checkLength, setCheckLength] = useState(false)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${contactId}`)
      .then(res => res.json())
      .then(data => setThisContact({
        name: data.name,
        email: data.email,
        company: {
          name: data.company.name
        }
      }))
  }, [])

  // FETCH CONTACT'S POSTS
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${contactId}`)
      .then(res => res.json())
      .then(data => setContactPosts(data.map(obj => ({
        id: obj.id,
        title: obj.title,
        body: obj.body
      }))))
    }, [])

  useEffect(() => {
    emailValidation(thisContact.email, setCheckEmail)
    lengthValidation(thisContact.name, 6, setCheckLength)
  }, [thisContact])

  function handleChange(event) {
    const {name, value} = event.target
    setThisContact(prevContact => ({
      ...prevContact,
      [name]: name === "company" ? {["name"]: value} : value 
    }))
  }

  // HANDLE FORM SUBMIT
  function handleSubmit(event) {
    event.preventDefault()
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(thisContact)
    }
    fetch(`https://jsonplaceholder.typicode.com/users/${contactId}`, requestOptions)
      .then(res => res.json())
      .then(data => console.log('Success:', data))
    alert("200 SUCCESS")
  }

  const postsElements = thisContactPosts.map(el => (
    <ContactPosts 
      title={el.title}
      body={el.body}
      id={el.id}
    />
  ))

  return (
    <>
    <section className="contact_detail">
      <h2 className="contact_detail--title">{thisContact.name}</h2>
      <div className="contact_list--initials contact_detail--initials">{getInitials(thisContact.name)}</div>
      <form className="contact_detail--inputs" onSubmit={handleSubmit}>
        <LoginInput 
          type="text"
          name="name"
          handleChange={handleChange}
          userCredentials={thisContact.name}
          isChecked={checkLength}
          isRequired={true}
        />
        <LoginInput 
          type="email"
          name="email"
          handleChange={handleChange}
          userCredentials={thisContact.email}
          isChecked={checkEmail}
          isRequired={true}
        />
        <LoginInput 
          type="text"
          name="company"
          handleChange={handleChange}
          userCredentials={thisContact.company.name}
          isChecked={true}
          isRequired={false}
        />
        <button
          className={checkEmail && checkLength ? "login--submit" : "login--submit_disabled"} 
          disabled={!checkEmail && !checkLength}
          >
          Save
        </button>
      </form>
      <div className="contact_posts">
        {postsElements}
      </div>
    </section>
    <Menu 
      isInContactSection={true}
      handleLogout={props.handleLogin}
    />
    </>
  )
}

export default ContactDetail