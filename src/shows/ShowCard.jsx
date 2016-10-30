const React = require('react')
const {Link} = require('react-router')

const ShowCard = (props) => (
  <Link to={`/details/${props.imdbID}`}>
    <div className='videoitem'>
      <div className='b-video'>
        <div className='v-img'>
          <img src={`images/posters/${props.poster}`} alt={props.title} />
        </div>
        <div className='v-desc'>
          {props.title}<br />
          <small className='text-muted'>{props.description}</small>
        </div>
        <div className='v-views'>
          ({props.year})
        </div>
      </div>
    </div>
  </Link>
)

const {string} = React.PropTypes

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string,
  imdbID: string.isRequired
}

module.exports = ShowCard
