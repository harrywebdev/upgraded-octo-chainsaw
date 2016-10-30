const React = require('react')
const ShowCard = require('../shows/ShowCard')
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
                <ShowCard {...show} />
              </div>
              {clearfix}
            </div>
          )
        })}
      </div>
    )
  }
})

module.exports = ShowsList
