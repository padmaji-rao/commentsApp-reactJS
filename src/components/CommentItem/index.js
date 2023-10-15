import './index.css'

import {formatDistanceToNow} from 'date-fns'

console.log(formatDistanceToNow(new Date())) // less than a minute

const CommentItem = props => {
  const {colorName, commentDetails, onDelete, onLiked} = props
  const {name, comment, id, isLiked} = commentDetails
  const url = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  console.log(colorName, commentDetails)
  const firstLetter = name[0].toUpperCase()
  const onDeleteClicked = () => {
    onDelete(id)
  }

  const onLikeClicked = () => {
    onLiked(id)
  }

  return (
    <li className="comment-item">
      <div className="top">
        <p className={`logo ${colorName}`}>{firstLetter}</p>
        <div className="comment-row">
          <h1 className="comment-name">
            {name}{' '}
            <span className="time">{formatDistanceToNow(new Date())}</span>
          </h1>
          <p className="comment-description">{comment}</p>
        </div>
      </div>
      <div className="like-delete">
        <button onClick={onLikeClicked} className="like-button" type="button">
          <img className="icon" src={url} alt="like" />
          <p className="like">Like</p>
        </button>
        <button
          data-testid="delete"
          onClick={onDeleteClicked}
          className="like-button"
          type="button"
        >
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="horizz-line" />
    </li>
  )
}
export default CommentItem
