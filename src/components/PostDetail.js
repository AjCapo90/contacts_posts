import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import Menu from "./Menu"

function PostDetail(props) {
  const {postId} = useParams()

  const [thisPost, setThisPost] = useState({})
  /* MODIFY THIS..
  const [thisUser, setThisUser] = useState({
    id: 0,
    name: "",
    address: {
      street: "",
      city: ""
    }
  })
  */

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => setThisPost(data))
  }, [])

 /* MODIFY THIS..!! 
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then(res => res.json())
      .then(data => setThisUser(data.map(el => {
        if (el.id === thisPost.userId)
        return ({
          id: el.id,
          name: el.name,
          address: {
            street: el.address.street,
            city: el.address.city
          }
        })
      })))
  }, [])

  console.log(thisUser)
*/

  return (
    <>
      <section className="post_detail">
        {JSON.stringify(thisPost)}
      </section>
      <Menu />
    </>
  )
}

export default PostDetail