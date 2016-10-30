const React = require('react')
const Header = require('./Header')

const Layout = (props) => (
  <div>
    <Header />
    <div className='content-wrapper'>
      <div className='container'>
        {props.children}
      </div>
    </div>
  </div>
)

const {element} = React.PropTypes

Layout.propTypes = {
  children: element
}

module.exports = Layout
