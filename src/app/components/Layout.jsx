const React = require('react')
const {element} = React.PropTypes
const Header = require('../containers/HeaderContainer')
const Footer = require('./Footer')

const PropTypes = {
  children: element
}

const Layout = (props) => (
  <div>
    <Header />
    <div className='content-wrapper'>
      <div className='container'>
        {props.children}
        <hr className='invisible' />
      </div>
    </div>
    <Footer />
  </div>
)

Layout.propTypes = PropTypes

module.exports = Layout
