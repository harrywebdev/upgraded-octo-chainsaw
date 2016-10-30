const React = require('react')
const {Link} = require('react-router')
const {string, func} = React.PropTypes
const {connector} = require('../app/store')

const Header = React.createClass({
  propTypes: {
    searchTerm: string,
    setSearchTerm: func
  },
  handleSearchTermEvent (event) {
    this.props.setSearchTerm(event.target.value)
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
                <div className='visible-xs visible-sm clearfix'></div>
                <div className='col-lg-6 col-sm-8 col-xs-12'>
                  <form method='post'>
                    <div className='topsearch'>
                      <div className='input-group'>
                        <span className='input-group-addon' id='sizing-addon2'><i className='fa fa-search' /></span>
                        <input value={this.props.searchTerm} type='text' className='form-control' placeholder='Search for a movie...' onChange={this.handleSearchTermEvent} autoFocus='' />
                        <div className='input-group-btn' style={{width: '100%'}} />
                      </div>
                    </div>
                  </form>
                </div>
                <div className='visible-xs clearfix'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = connector(Header)
