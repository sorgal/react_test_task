import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const middlewares = [thunk]

export const store = createStore(
  reducers, compose(
    applyMiddleware(...middlewares)
  )
)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers/index').default
    store.replaceReducer(nextReducer)
  })
}
