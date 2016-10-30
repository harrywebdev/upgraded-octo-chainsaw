const React = require('react')
const {string, func} = React.PropTypes
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions'

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

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
