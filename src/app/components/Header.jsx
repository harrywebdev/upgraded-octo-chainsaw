import React from 'react'
import {Link} from 'react-router'

const {string, func} = React.PropTypes

const Header = React.createClass({
  propTypes: {
    searchTerm: string,
    handleSearchTermEvent: func,
    handleSearchSubmitEvent: func
  },
  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='navbar-container'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-1 col-sm-2 col-xs-2'>
                  <Link to='/' className='navbar-brand'><img src='/images/logo.svg' alt='Project name' className='logo' /></Link>
                </div>
                <div className='col-lg-6 col-sm-8 col-xs-10'>
                  <form onSubmit={this.props.handleSearchSubmitEvent}>
                    <div className='topsearch'>
                      <div className='input-group'>
                        <span className='input-group-addon' id='sizing-addon2'><i className='fa fa-search' /></span>
                        <input value={this.props.searchTerm} type='text' className='form-control' placeholder='Search for a movie...' onChange={this.props.handleSearchTermEvent} autoFocus='' />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Header
