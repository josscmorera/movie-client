import { formatDate } from "../Utils/functions"


const CommentItem = ({ comment }) => {
  return (
    <div>
      <p>{comment?.comment}</p>
      <p>{ formatDate(comment?.createdAt)}</p>
    </div>
  )
}

export default CommentItem;