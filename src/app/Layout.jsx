const React = require('react')
const Header = require('./Header')

const Layout = (props) => (
  <div>
    <Header />
    <div className='container-fluid'>
      {props.children}
    </div>
  </div>
)

const {element} = React.PropTypes

Layout.propTypes = {
  children: element
}

module.exports = Layout
