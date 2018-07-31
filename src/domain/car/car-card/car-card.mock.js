import { values } from 'ramda';
import { CAR_AVAILABILITY } from '../car.constants';

const sample = arr => arr[Math.floor(Math.random() * arr.length)];
export const mockedCarAvailability = {
  available: sample(values(CAR_AVAILABILITY))
};

export const mockedGetCarAvailability = () =>
  Promise.resolve(mockedCarAvailability);
