import {useState, useEffect} from "react"
import ContactPost from "../Contacts/ContactPosts"
import Menu from "../Menu/Menu"

function PostList(props) {
  const [posts, setPosts] = useState([])

  // FETCH POSTS LIST
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.map(obj => obj)))
  }, [])
  
  // RENDER POSTS
  const postsElements = posts.map(el => (
    <ContactPost 
      key={el.id}
      title={el.title}
      body={el.body}
      id={el.id}
      userId={el.userId}
    />
  ))

  return (
    <>
    <section className="posts_list">
      <h2 className="post_list--title">Posts</h2>
      {postsElements}
    </section>
    <Menu 
      handleLogout={props.handleLogin}
    />
    </>
  )
}

export default PostList