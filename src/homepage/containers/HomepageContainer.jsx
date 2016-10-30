const React = require('react')
const {connector} = require('../../app/store')
const {arrayOf, object, string} = React.PropTypes
const Homepage = require('../components/Homepage')

const HomepageContainer = React.createClass({
  propTypes: {
    shows: arrayOf(object),
    searchTerm: string
  },
  render () {
    const shows = this.props.shows
      .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
    return (
      <Homepage shows={shows} />
    )
  }
})

module.exports = connector(HomepageContainer)
