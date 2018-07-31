import { all } from 'redux-saga/effects';
import { carFetchSaga } from './car-list';

export function* rootSaga() {
  yield all([carFetchSaga()]);
}
