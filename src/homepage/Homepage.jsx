const React = require('react')
const {connector} = require('../app/store')
const {arrayOf, object, string} = React.PropTypes
const ShowCard = require('../shows/ShowCard')

const Homepage = React.createClass({
  propTypes: {
    shows: arrayOf(object),
    searchTerm: string
  },
  render () {
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
              <div className='row'>
                {this.props.shows
                  .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
                  .map((show, index) => {
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
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = connector(Homepage)
