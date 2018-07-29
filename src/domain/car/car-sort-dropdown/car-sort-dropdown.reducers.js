import { UPDATE_CARS_SORTBY, CAR_LIST_SORTBY } from '../car.constants';

const DEFAULT_CAR_LIST_SORTBY = CAR_LIST_SORTBY.NAME;

const sortMap = {
  Name: CAR_LIST_SORTBY.NAME,
  Availability: CAR_LIST_SORTBY.AVAILABILITY
};

export const carsSortByReducer = (
  state = DEFAULT_CAR_LIST_SORTBY,
  { type, payload }
) => {
  switch (type) {
    case UPDATE_CARS_SORTBY:
      return sortMap[payload.sortBy];
    default:
      return state;
  }
};
