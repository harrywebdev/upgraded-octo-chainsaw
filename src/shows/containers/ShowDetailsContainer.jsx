import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import ShowDetails from '../components/ShowDetails'
import {comments} from '../../../data/comments'

const {arrayOf, object} = React.PropTypes

const ShowDetailsContainer = React.createClass({
  propTypes: {
    params: object.isRequired,
    shows: arrayOf(object).isRequired
  },
  getInitialState () {
    return {
      omdbData: {},
      comments: []
    }
  },
  componentDidMount () {
    this.fetchRating()
    this.fetchComments()
  },
  componentDidUpdate (prevProps) {
    if (prevProps.params.id !== this.props.params.id) {
      this.fetchRating()
      this.fetchComments()
    }
  },
  fetchRating () {
    axios.get(`http://www.omdbapi.com/?i=${this.props.params.id}`)
      .then((response) => {
        this.setState({omdbData: response.data})
      })
      .catch((error) => {
        console.error('Error fetching IMDB rating', error)
      })
  },
  fetchComments () {
    // TODO: API call for comments, now just JSON
    this.setState({comments: comments})
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
    const comments = this.state.comments

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
        comments={comments}
      />
    )
  }
})

const mapStateToProps = (state) => ({
  shows: state.shows
})

export default connect(mapStateToProps)(ShowDetailsContainer)
