import { USER_SUBSCRIBE } from './action'

import reducerEffects from '../../utils/reducerEffects'

const { handler, createReducer } = reducerEffects
const initialState = {
  submitting: false,
  authSuccessRes: '',
  authErrorMsg: ''
}
const reducerDesc = {
  [USER_SUBSCRIBE.REQUEST]: handler(),
  [USER_SUBSCRIBE.SUCCESS]: (state, action) => ({
    ...state,
    submitting: false,
    authSuccessRes: '',
    [action.target]: action.payload
  }),
  [USER_SUBSCRIBE.FAILURE]: handler()
}

export default createReducer(initialState, reducerDesc)
