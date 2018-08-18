import { fork, all } from 'redux-saga/effects'

import home from '../containers/Home/saga'


export default function* () {
  yield all([
    fork(home)
  ])
}
