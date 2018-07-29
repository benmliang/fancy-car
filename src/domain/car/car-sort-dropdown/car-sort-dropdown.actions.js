import { UPDATE_CARS_SORTBY } from '../car.constants';

export const updateCarsSortBy = sortBy => ({
  type: UPDATE_CARS_SORTBY,
  payload: {
    sortBy
  },
  scope: 'CAR_LIST' // TODO
});
