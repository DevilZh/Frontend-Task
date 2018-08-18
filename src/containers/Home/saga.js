import { all, put, call, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { reset } from 'redux-form'

import { postUserInfoService } from './api'
import {
  USER_SUBSCRIBE,
  subscribeSuccess,
  subscribeFailure
} from './action'

function* postSubscribe(action) {
  try {
    const res = yield call(
      postUserInfoService,
      action.payload
    )
    yield put(reset('userInfo'))
    if (res.data) {
      return yield put(subscribeSuccess(res.data))
    }
    yield put(subscribeSuccess(false))

    yield put(subscribeFailure(res.errorMessage))
    yield call(delay, 3e3)
    yield put(subscribeFailure(''))
  } catch (e) {
    yield put(subscribeFailure(e.message))
  }
}

export default function* () {
  yield all([
    takeLatest(USER_SUBSCRIBE.REQUEST, postSubscribe)
  ])
}
