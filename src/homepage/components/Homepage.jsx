const React = require('react')
const {arrayOf, object} = React.PropTypes
const ShowsList = require('../../shows/components/ShowsList')

const PropTypes = {
  shows: arrayOf(object)
}

const Homepage = (props) => (
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
          <ShowsList shows={props.shows} />
        </div>
      </div>
    </div>
  </div>
)

Homepage.propTypes = PropTypes

module.exports = Homepage
