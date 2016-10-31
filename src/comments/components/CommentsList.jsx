import React from 'react'
import Comment from './Comment'

const {arrayOf, object} = React.PropTypes
const PropTypes = {
  comments: arrayOf(object).isRequired
}

const CommentsList = (props) => (
  <div className='comments'>
    <div className='comments-list'>
      {props.comments.map((comment) => {
        return (
          <Comment author={comment.author} timestamp={comment.timestamp} text={comment.text} key={comment.id} />
        )
      })}
    </div>
  </div>
)

CommentsList.propTypes = PropTypes

export default CommentsList
