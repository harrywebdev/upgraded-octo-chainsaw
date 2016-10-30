const React = require('react')
const {Link} = require('react-router')
const {string} = React.PropTypes

const PropTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  imdbID: string.isRequired
}

const ShowCardHorizontal = (props) => (
  <div className='h-video row'>
    <Link to={`/details/${props.imdbID}`}>
      <div className='col-lg-6 col-sm-6'>
        <div className='v-img'>
          <img src={`images/posters/${props.poster}`} alt={props.title} />
        </div>
      </div>
      <div className='col-lg-6 col-sm-6'>
        <div className='v-desc'>
          {props.title}<br />
          <small className='text-muted'>{`${props.description.substring(0, 100)}...`}</small>
        </div>
      </div>
      <div className='clearfix'></div>
    </Link>
  </div>
)

ShowCardHorizontal.propTypes = PropTypes

module.exports = ShowCardHorizontal
