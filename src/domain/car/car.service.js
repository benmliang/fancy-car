import { fetchV1 } from '../../common/utils/fetch';
import { getCars } from './car-list/car-list.mock';
import { mockedGetCarAvailability } from './car-card/car-card.mock';

export const getAll = () => {
  return fetchV1('http://api.fancycar.com/v1/cars');
};

export const getCarAvailability = id => {
  return fetchV1(`http://api.fancycar.com/v1/availability?id=${id}`);
};

export const CarsService = {
  getAll: getCars
};

export const AvailabilityService = {
  getById: id => mockedGetCarAvailability(id)
};
