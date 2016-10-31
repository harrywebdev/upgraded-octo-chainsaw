import React from 'react'

const {string, arrayOf, object, bool} = React.PropTypes

const Comment = React.createClass({
  propTypes: {
    author: string.isRequired,
    timestamp: string.isRequired,
    text: string.isRequired,
    replies: arrayOf(object),
    isReply: bool
  },
  render () {
    let replies

    if (this.props.replies) {
      replies = this.props.replies.map((comment) => {
        return (
          <Comment
            author={comment.author}
            timestamp={comment.timestamp}
            text={comment.text}
            key={comment.id}
            replies={comment.replies}
            isReply={Boolean(true)}
          />
        )
      })
    }

    return (
      <div>
        <div className={`cl-comment${this.props.isReply ? '-reply' : ''}`}>
          <div className='cl-avatar'><a><img src='images/ava8.png' alt='' /></a></div>
          <div className='cl-comment-text'>
            <div className='cl-name-date'><a>{this.props.author}</a> {this.props.timestamp}</div>
            <div className='cl-text'>{this.props.text}</div>
          </div>
          <div className='clearfix'></div>
        </div>
        {replies}
      </div>
    )
  }
})

export default Comment
