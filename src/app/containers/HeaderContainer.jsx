import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions'
import Header from '../components/Header'
import {hashHistory} from 'react-router'

const {string, func} = React.PropTypes

const HeaderContainer = React.createClass({
  propTypes: {
    searchTerm: string,
    setSearchTerm: func
  },
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
  },
  goToSearch (event) {
    event.preventDefault()
    hashHistory.push('/')
  },
  render () {
    return (
      <Header searchTerm={this.props.searchTerm} handleSearchTermEvent={this.handleSearchTermEvent} handleSearchSubmitEvent={this.goToSearch} />
    )
  }
})

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
