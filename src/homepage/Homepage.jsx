const React = require('react')
const {connector} = require('../app/store')
const {arrayOf, object, string} = React.PropTypes
const ShowsList = require('../shows/components/ShowsList')

const Homepage = React.createClass({
  propTypes: {
    shows: arrayOf(object),
    searchTerm: string
  },
  render () {
    const shows = this.props.shows
      .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
    return (
      <div className='row'>
        <div className='col-lg-12'>
          <div className='content-block head-div'>
            <div className='cb-header'>
              <div className='row'>
                <div className='col-lg-10 col-sm-10 col-xs-8'>
                  <ul className='list-inline'>
                    <li><a className='color-active'>Featured Videos</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='cb-content videolist'>
              <ShowsList shows={shows} />
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = connector(Homepage)
