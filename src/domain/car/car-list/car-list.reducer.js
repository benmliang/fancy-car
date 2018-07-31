import { FETCH_CARS_SUCCEEDED } from '../car.constants';

export const carsListReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_CARS_SUCCEEDED:
      return payload;
    default:
      return state;
  }
};
