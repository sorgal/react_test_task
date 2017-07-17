import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middlewares = [thunk]

// const reduxLogger = require('redux-logger')
// middlewares.push(reduxLogger({ duration: true, collapsed: true }))

export const store = createStore(
  reducers, compose(
    applyMiddleware(...middlewares),
    // window.devToolsExtension() : f => f
  )
)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers/index').default
    store.replaceReducer(nextReducer)
  })
}
