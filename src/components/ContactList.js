import {useState, useEffect} from "react"
import ContactItems from "./ContactItems"
import Menu from "./Menu"

function ContactList() {
  const [users, setUsers] = useState([])
  const [isInContactSection, setIsInContactSection] = useState(true)
  // GET DATA
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const usersItems = users.map(user => (
    <ContactItems 
      key={user.id}
      id={user.id}
      name={user.name}
      street={user.address.street}
      city={user.address.city}
    />
  ))

  return (
    <section className="contact_list">
      <h1 className="contact_list--title">Contacts</h1>
      {usersItems}
      <Menu 
        isInContactSection={isInContactSection}
      />
    </section>

  )
}

export default ContactList