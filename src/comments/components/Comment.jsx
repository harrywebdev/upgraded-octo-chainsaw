import React from 'react'

const {string} = React.PropTypes
const PropTypes = {
  author: string.isRequired,
  timestamp: string.isRequired,
  text: string.isRequired
}

const Comment = (props) => (
  <div className='cl-comment'>
    <div className='cl-avatar'><a><img src='images/ava8.png' alt='' /></a></div>
    <div className='cl-comment-text'>
      <div className='cl-name-date'><a>{props.author}</a> {props.timestamp}</div>
      <div className='cl-text'>{props.text}</div>
    </div>
    <div className='clearfix'></div>
  </div>
)

Comment.propTypes = PropTypes

export default Comment
