const React = require('react')
const axios = require('axios')
const {arrayOf, object} = React.PropTypes
const {connector} = require('../../app/store')
const ShowDetails = require('../components/ShowDetails')

const ShowDetailsContainer = React.createClass({
  propTypes: {
    params: object.isRequired,
    shows: arrayOf(object).isRequired
  },
  getInitialState () {
    return {
      omdbData: {}
    }
  },
  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.props.params.id}`)
      .then((response) => {
        this.setState({omdbData: response.data})
      })
      .catch((error) => {
        console.error('Error fetching IMDB rating', error)
      })
  },
  getCurrentShow (id) {
    return this.props.shows.filter((show) => show.imdbID === id)[0]
  },
  getNextShows (id) {
    return this.props.shows.filter((show) => show.imdbID !== id).slice(0, 2)
  },
  getRecommendedShows (id) {
    return this.props.shows.filter((show) => show.imdbID !== id).slice(2, 5)
  },
  render () {
    const {title, description, year, trailer} = this.getCurrentShow(this.props.params.id)
    const nextShows = this.getNextShows(this.props.params.id)
    const recommendedShows = this.getRecommendedShows(this.props.params.id)

    let rating
    if (this.state.omdbData.imdbRating) {
      rating = this.state.omdbData.imdbRating
    }

    return (
      <ShowDetails
        title={title}
        description={description}
        year={year}
        trailer={trailer}
        rating={rating}
        nextShows={nextShows}
        recommendedShows={recommendedShows}
      />
    )
  }
})

module.exports = connector(ShowDetailsContainer)
