import * as Api from './api'
export function * waitMatching() {
  yield call(Api.matchUser());
}