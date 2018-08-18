import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { store, history } from './redux/store'
import App from './containers/App'

document.querySelector('html').style.fontSize = `${(100 * document.body.offsetWidth) / 375}px`
ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>

  ), document.getElementById('mount')
)
