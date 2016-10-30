const React = require('react')
const {Link} = require('react-router')

const Footer = () => (
  <footer>
    <div className='container-fluid'>
      <div className='row'>
        <div className='container padding-def'>
          <div className='col-lg-1  col-sm-2 col-xs-12 footer-logo'>
            <Link to='/' className='navbar-brand'><img src='/images/logo.svg' alt='Project name' className='logo' /></Link>
          </div>
          <div className='col-lg-7  col-sm-7 col-xs-12'>
            <div className='f-links'>
              <ul className='list-inline'>
                <li><a>About</a></li>
                <li><a>Press</a></li>
                <li><a>Copyright</a></li>
                <li><a>Advertise</a></li>
                <li><a>Help</a></li>
              </ul>
            </div>
            <div className='delimiter'></div>
            <div className='f-copy'>
              <ul className='list-inline'>
                <li>&copy; 2016</li>
              </ul>
            </div>
          </div>
          <div className='col-lg-offset-1 col-lg-3 col-sm-3 col-xs-12'>
            <div className='f-icon pull-left'>
              <a><i className='fa fa-facebook-square' /></a>
              <a><i className='fa fa-twitter' /></a>
              <a><i className='fa fa-google-plus' /></a>
            </div>
            <div className='clearfix'></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

module.exports = Footer
