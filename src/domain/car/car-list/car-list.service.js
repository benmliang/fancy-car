import { fetchV1 } from '../../../common/utils/fetch';
import { getCars } from './car-list.mock';

const getAll = () => {
  return fetchV1('http://api.fancycar.com/v1/cars');
};

export const CarsService = {
  getAll: getCars
};
