import {
  FETCH_CAR_AVAILABILITY_SUCCEEDED,
  FETCH_CARS_SUCCEEDED,
  CAR_AVAILABILITY
} from '../car.constants';

const isAvailableToBuy = availability =>
  CAR_AVAILABILITY.IN_DEALERSHIP === availability;

export const carsListReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_CARS_SUCCEEDED:
      return payload;
    case FETCH_CAR_AVAILABILITY_SUCCEEDED:
      return state.map(
        car =>
          car.id === payload.id
            ? {
                ...car,
                availability: payload.availability
              }
            : car
      );
    default:
      return state;
  }
};
