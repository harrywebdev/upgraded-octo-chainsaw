const React = require('react')
const Header = require('./Header')
const Footer = require('./Footer')

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

const {element} = React.PropTypes

Layout.propTypes = {
  children: element
}

module.exports = Layout
