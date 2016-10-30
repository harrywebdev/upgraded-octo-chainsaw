const React = require('react')
const ReactDOM = require('react-dom')
const {Router, hashHistory} = require('react-router')
const Layout = require('./Layout')

// shim for node.js because server-side asynchronous routes don't make sense
if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')
  }
}

const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, cb) {
      require.ensure([], () => {
        cb(null, require('../homepage/Homepage'))
      })
    }
  }
}

const App = React.createClass({
  render () {
    return (
      <Router history={hashHistory} routes={rootRoute} />
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
