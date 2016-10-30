const React = require('react')
const ReactDOM = require('react-dom')
const {Router, hashHistory} = require('react-router')
const {Provider} = require('react-redux')
const Layout = require('./Layout')
const {store} = require('./store')

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
      <Provider store={store}>
        <Router history={hashHistory} routes={rootRoute} />
      </Provider>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
