const React = require('react')
const {string, func} = React.PropTypes
const {connector} = require('../store')
const Header = require('../components/Header')

const HeaderContainer = React.createClass({
  propTypes: {
    searchTerm: string,
    setSearchTerm: func
  },
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  },
  render () {
    return (
      <Header searchTerm={this.props.searchTerm} handleSearchTermEvent={this.handleSearchTermEvent} />
    )
  }
})

module.exports = connector(HeaderContainer)
