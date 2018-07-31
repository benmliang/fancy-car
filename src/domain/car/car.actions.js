import {
  FETCH_CAR_AVAILABILITY_START,
  FETCH_CARS_START
} from './car.constants';

export const fetchCars = () => ({
  type: FETCH_CARS_START
});

export const fetchCarAvailability = () => ({
  type: FETCH_CAR_AVAILABILITY_START
});
