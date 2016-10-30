const React = require('react')
const ReactDOM = require('react-dom')
const {Router, applyRouterMiddleware, hashHistory} = require('react-router')
const {Provider} = require('react-redux')
const {useScroll} = require('react-router-scroll')
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
  },
  childRoutes: [
    {
      path: '/details/:id',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('../shows/containers/ShowDetailsContainer'))
        })
      }
    }
  ]
}

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory} routes={rootRoute} render={applyRouterMiddleware(useScroll())} />
      </Provider>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
