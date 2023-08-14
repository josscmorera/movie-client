import { formatDate } from "../Utils/functions"
import Loader from "./Loader";


const CommentItem = ({  comment, user, setEdit, onDelete , ldDelete}) => {
  return (
    <div>
      <p>{comment?.comment}</p>
      <p>{ comment?.userName}</p>
      <p>{ formatDate(comment?.createdAt)}</p>
      {user?._id === comment?.userId && (
        <div>
          <button onClick={() => setEdit(comment)} disabled={ldDelete} >Edit</button>
          <button onClick={() => onDelete(comment?._id)} disabled={ldDelete} >{ldDelete ? <Loader /> : 'Delete'}</button>
        </div>
      )}
    </div>
  )
}

export default CommentItem;