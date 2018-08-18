import actionTypeCreater from '../../utils/actionTypeCreater'

export const USER_SUBSCRIBE = actionTypeCreater('USER_SUBSCRIBE')

export const subscribeRequest = payload => ({
  type: USER_SUBSCRIBE.REQUEST,
  target: 'submitting',
  payload
})

export const subscribeSuccess = (payload = '') => ({
  type: USER_SUBSCRIBE.SUCCESS,
  target: 'authSuccessRes',
  payload
})

export const subscribeFailure = (payload = '') => ({
  type: USER_SUBSCRIBE.FAILURE,
  target: 'authErrorMsg',
  payload
})