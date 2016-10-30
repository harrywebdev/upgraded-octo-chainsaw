const React = require('react')
const ShowCard = require('../shows/ShowCard')
const {arrayOf, object} = React.PropTypes
const {shows} = require('../../data/shows.json')

const Homepage = React.createClass({
  propTypes: {
    shows: arrayOf(object)
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
                {shows
                  .map((show, index) => {
                    const clearfix = index && !((index + 1) % 4)
                      ? <div className='clearfix visible-md visible-lg' />
                      : (index && !((index + 1) % 2) ? <div className='clearfix visible-sm' /> : '')
                    return (
                      <div>
                        <div className='col-lg-3 col-sm-6'>
                          <ShowCard {...show} key={show.imdbID} />
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

module.exports = Homepage
