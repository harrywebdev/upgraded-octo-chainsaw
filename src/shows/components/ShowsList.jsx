import React from 'react'
import ShowCardBox from './ShowCardBox'

const {arrayOf, object} = React.PropTypes

const ShowsList = React.createClass({
  propTypes: {
    shows: arrayOf(object)
  },
  render () {
    return (
      <div className='row'>
        {this.props.shows.map((show, index) => {
          // ugh
          const clearfix = index && !((index + 1) % 4)
            ? <div className='clearfix visible-md visible-lg' />
            : (index && !((index + 1) % 2) ? <div className='clearfix visible-sm' /> : '')
          return (
            <div key={show.imdbID}>
              <div className='col-lg-3 col-sm-6'>
                <ShowCardBox {...show} />
              </div>
              {clearfix}
            </div>
          )
        })}
      </div>
    )
  }
})

export default ShowsList
