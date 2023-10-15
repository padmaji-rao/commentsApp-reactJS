import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
console.log(initialContainerBackgroundClassNames)
class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
  }

  onInputChange = event => {
    this.setState({name: event.target.value})
  }

  onTextAreaChange = event => {
    this.setState({comment: event.target.value})
  }

  onSubmitClicked = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      name,
      comment,
      id: uuidv4(),
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onDelete = id => {
    console.log('In delete')
    console.log(id)
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(each => each.id !== id),
    }))
  }

  onLiked = id => {
    console.log('In liked')
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {name, comment, commentsList, isLiked} = this.state
    console.log(name, comment, commentsList, isLiked)

    return (
      <div className="bg-container">
        <h1 className="left-head">Comments</h1>
        <div className="top-container">
          <div className="left-container">
            <p className="left-para">Say something about 4.0 Technologies</p>
            <form className="comment-form" onSubmit={this.onSubmitClicked}>
              <input
                value={name}
                onChange={this.onInputChange}
                placeholder="Your Name"
                className="left-input"
              />
              <textarea
                value={comment}
                onChange={this.onTextAreaChange}
                className="left-textarea"
                placeholder="Your Comment"
              />
              <button className="left-button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-pic"
            />
          </div>
        </div>
        <hr className="horiz-line" />
        <div className="bottom-container">
          <p>
            <span className="comments-count">{commentsList.length}</span>
            Comments
          </p>
          <ul className="comments-list">
            {commentsList.map((eachComment, index) => {
              console.log('hi')

              return (
                <CommentItem
                  colorName={initialContainerBackgroundClassNames[index]}
                  onDelete={this.onDelete}
                  onLiked={this.onLiked}
                  commentDetails={eachComment}
                  key={eachComment.id}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
