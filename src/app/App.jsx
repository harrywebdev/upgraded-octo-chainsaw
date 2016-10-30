import React from 'react'
import ReactDOM from 'react-dom'
import {Router, applyRouterMiddleware, hashHistory} from 'react-router'
import {Provider} from 'react-redux'
import {useScroll} from 'react-router-scroll'
import Layout from './components/Layout'
import {store} from './store'

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
        cb(null, require('../homepage/containers/HomepageContainer').default)
      })
    }
  },
  childRoutes: [
    {
      path: '/details/:id',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('../shows/containers/ShowDetailsContainer').default)
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
