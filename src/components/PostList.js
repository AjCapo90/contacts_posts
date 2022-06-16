import {useState, useEffect} from "react"
import ContactPost from "./ContactPosts"
import Menu from "./Menu"

function PostList(props) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data.map(obj => obj)))
  }, [])
  
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