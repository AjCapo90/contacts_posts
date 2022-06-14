

function PostComments(props) {
  return (
    <div className="post_comment">
      <h3 className="post_comment--name">{props.name}</h3>
      <p className="post_comment--body">{props.body}</p>
    </div>
  )
}

export default PostComments