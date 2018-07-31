import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_CARS_START,
  FETCH_CARS_FAILED,
  FETCH_CARS_SUCCEEDED
} from '../car.constants';
import { CarsService } from '../car.service';

export function* carFetchSaga() {
  yield takeLatest(FETCH_CARS_START, fetchCars);
}

function* fetchCars() {
  try {
    const cars = yield call(CarsService.getAll);
    yield put({ type: FETCH_CARS_SUCCEEDED, payload: cars });
  } catch (e) {
    yield put({ type: FETCH_CARS_FAILED, message: e.message });
  }
}
