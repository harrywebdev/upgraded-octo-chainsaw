import React from 'react'
import ShowCardHorizontal from './ShowCardHorizontal'

const {string, arrayOf, object} = React.PropTypes
const PropTypes = {
  heading: string.isRequired,
  shows: arrayOf(object).isRequired
}

const SidebarShows = (props) => (
  <div>
    <div className='caption'>
      <div className='left'>
        <a>{props.heading}</a>
      </div>
      <div className='clearfix'></div>
    </div>
    <div className='list'>
      {props.shows.map((show) => {
        return (
          <ShowCardHorizontal {...show} description={`${show.description.substring(0, 100)}...`} key={show.imdbID} />
        )
      })}
    </div>
  </div>
)

SidebarShows.propTypes = PropTypes

export default SidebarShows
