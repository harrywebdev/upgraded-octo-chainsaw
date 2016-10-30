const React = require('react')
const BodyClassName = require('react-body-classname')
const {arrayOf, object, string} = React.PropTypes
const SidebarShows = require('./SidebarShows')

const ShowDetails = React.createClass({
  propTypes: {
    title: string.isRequired,
    description: string.isRequired,
    year: string.isRequired,
    trailer: string.isRequired,
    rating: string,
    nextShows: arrayOf(object).isRequired,
    recommendedShows: arrayOf(object).isRequired
  },
  getInitialState () {
    return {
      expandDescription: true
    }
  },
  render () {
    let rating
    if (this.props.rating) {
      rating = (
        <div>
          <h4>IMDB Rating:</h4>
          <p>{this.props.rating}</p>
        </div>
      )
    }
    return (
      <BodyClassName className='single-video'>
        <div className='row'>
          <div className='col-lg-8 col-xs-12 col-sm-12'>
            <div className='sv-video'>
              <div className='embed-responsive embed-responsive-16by9'>
                <iframe src={`https://www.youtube-nocookie.com/embed/${this.props.trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' className='embed-responsive-item'></iframe>
              </div>
            </div>
            <div className='author'>
              <h1 style={{padding: 0}}>{this.props.title}</h1>
            </div>
            <div className='info'>
              <div className={`description collapse ${this.state.expandDescription ? 'in' : ''}`}>
                <h4>About:</h4>
                <p>{this.props.description}</p>

                {rating}

                <h4>Release Date:</h4>
                <p>{this.props.year}</p>
              </div>

              <div className='showless' onClick={this.expandOrCollapseDescription}>
                <a style={{cursor: 'pointer'}}>Show {this.state.expandDescription ? 'Less' : 'More'}</a>
              </div>

              <div className='adblock2'>
                <div className='img'>
                  Google AdSense<br />
                  728 x 90
                </div>
              </div>

            </div>
          </div>

          <div className='col-lg-4 col-xs-12 col-sm-12'>

            <SidebarShows heading='Up Next' shows={this.props.nextShows} />

            <div className='adblock'>
              <div className='img'>
                Google AdSense<br />
                336 x 280
              </div>
            </div>

            <SidebarShows heading='Recommended Shows' shows={this.props.recommendedShows} />

          </div>
        </div>
      </BodyClassName>
    )
  }
})

module.exports = ShowDetails
