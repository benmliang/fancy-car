import { all } from 'redux-saga/effects';
import { carFetchSaga } from './car-list';
import { carAvailabilityFetchSaga } from './car-card';

export function* rootSaga() {
  yield all([carFetchSaga(), carAvailabilityFetchSaga()]);
}
