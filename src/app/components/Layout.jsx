import React from 'react'
import Header from '../containers/HeaderContainer'
import Footer from './Footer'

const {element} = React.PropTypes
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

export default Layout
