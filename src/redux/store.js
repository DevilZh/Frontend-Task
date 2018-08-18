import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import sagas from './sagas'

export const history = createHistory()
const routerMid = routerMiddleware(history)
const sagaMid = createSagaMiddleware()

export const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(routerMid, sagaMid),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

)
sagaMid.run(sagas)
