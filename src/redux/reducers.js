import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import home from '../containers/Home/reducer'

export default combineReducers({
  home,
  form: formReducer,
  router: routerReducer
})
