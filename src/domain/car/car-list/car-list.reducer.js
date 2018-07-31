import { FETCH_CARS_SUCCEEDED } from './car-list.constant';

export const carsListReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_CARS_SUCCEEDED:
      console.log('payload: ', payload);
      return payload;
    default:
      return state;
  }
};
