const React = require('react')
const axios = require('axios')
const {connector} = require('../app/store')
const {arrayOf, object} = React.PropTypes
const BodyClassName = require('react-body-classname')

const Details = React.createClass({
  propTypes: {
    params: object.isRequired,
    shows: arrayOf(object).isRequired
  },
  getInitialState () {
    return {
      omdbData: {},
      expandDescription: true
    }
  },
  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.props.params.id}`)
      .then((response) => {
        this.setState({omdbData: response.data})
      })
      .catch((error) => {
        console.error('axios error', error)
      })
  },
  assignShow (id) {
    return this.props.shows.filter((show) => show.imdbID === id)[0]
  },
  expandOrCollapseDescription () {
    this.setState({expandDescription: !this.state.expandDescription})
  },
  render () {
    const {title, description, year, trailer} = this.assignShow(this.props.params.id)

    let rating
    if (this.state.omdbData.imdbRating) {
      rating = (
        <div>
          <h4>IMDB Rating:</h4>
          <p>{this.state.omdbData.imdbRating}</p>
        </div>
      )
    }

    return (
      <BodyClassName className="single-video">
        <div className='row'>
          <div className='col-lg-8 col-xs-12 col-sm-12'>
            <div className='sv-video'>
              <div className='embed-responsive embed-responsive-16by9'>
                <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' className='embed-responsive-item'></iframe>
              </div>
            </div>
            <div className='author'>
              <h1 style={{padding: 0}}>{title}</h1>
            </div>
            <div className='info'>
              <div className={`description collapse ${this.state.expandDescription ? 'in' : ''}`}>
                <h4>About:</h4>
                <p>{description}</p>

                {rating}

                <h4>Release Date:</h4>
                <p>{year}</p>
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

              <div className='caption'>
                <div className='left'>
                  <a href='#'>Similar Videos</a>
                </div>
                <div className='clearfix'></div>
              </div>

            </div>
          </div>
        </div>
      </BodyClassName>
    )
  }
})

module.exports = connector(Details)
