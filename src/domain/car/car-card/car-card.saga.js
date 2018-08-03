import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_CAR_AVAILABILITY_FAILED,
  FETCH_CAR_AVAILABILITY_START,
  FETCH_CAR_AVAILABILITY_SUCCEEDED
} from '../car.constants';
import { AvailabilityService } from '../car.service';

export function* carAvailabilityFetchSaga() {
  yield takeLatest(FETCH_CAR_AVAILABILITY_START, fetchCarAvailability);
}

function* fetchCarAvailability({ payload }) {
  try {
    const { id } = payload;

    const { availability } = yield call(AvailabilityService.getById(id));
    yield put({
      type: FETCH_CAR_AVAILABILITY_SUCCEEDED,
      payload: { id: id, availability }
    });
  } catch (e) {
    yield put({ type: FETCH_CAR_AVAILABILITY_FAILED, message: e.message });
  }
}
