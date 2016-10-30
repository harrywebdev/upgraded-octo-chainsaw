const redux = require('redux')
const reactRedux = require('react-redux')
const {shows} = require('../../data/shows')
import * as actions from './actions'

const initialState = {
  searchTerm: '',
  shows
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOWS_SEARCH:
      return reduceSearchTerm(state, action)

    default:
      return state
  }
}

const reduceSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})

  return newState
}

// TODO: get rid of this Dev stuff in production
const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const connector = reactRedux.connect()

module.exports = {connector, store}
