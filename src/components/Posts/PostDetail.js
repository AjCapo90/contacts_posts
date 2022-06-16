import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import ContactItems from "../Contacts/ContactItems"
import PostComments from "./PostComments"
import Menu from "../Menu/Menu"

function PostDetail(props) {
  const {postId} = useParams()

  const [thisPost, setThisPost] = useState({})
  const [thisUser, setThisUser] = useState({
    id: 0,
    name: "",
    address: {
      steet: "",
      city: ""
    }
  })
  const [thisComments, setThisComments] = useState([])

  // FETCH THE CORRECT POST
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => setThisPost(data))
  }, [])

  // ASSOCIATE THE CORRECT USER TO THE POST
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then(res => res.json())
      .then(data => {
        const user = data.find(el => el.id === thisPost.userId)
        setThisUser({
          id: user.id,
          name: user.name,
          address: {
            street: user.address.street,
            city: user.address.city
          }
        })
      })
  }, [thisPost])

  // FETCH COMMENTS TO THE POST
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(res => res.json())
      .then(data => setThisComments(data))
  }, [])

  // RENDER COMMENTS
  const comments = thisComments.map(comment => (
    <PostComments 
      key={comment.id}
      name={comment.name}
      body={comment.body}
    />
  ))

  return (
    <>
      <section className="post_detail">
        <h2 className="post_detail--title">{thisPost.title}</h2>
        <ContactItems 
          key={thisUser.id}
          id={thisUser.id}
          name={thisUser.name}
          city={thisUser.address.city}
          street={thisUser.address.street}
        />
        <p>{thisPost.body}</p>
      </section>
      <section className="post_comments">
        {comments}
      </section>
      <Menu 
        handleLogout={props.handleLogin}
      />
    </>
  )
}

export default PostDetail