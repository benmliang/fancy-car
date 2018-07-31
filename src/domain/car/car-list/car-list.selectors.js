import { sort } from 'ramda';
import { createSelector, createStructuredSelector } from 'reselect';

import { CAR_AVAILABILITY, CAR_LIST_SORTBY } from '../car.constants';

const carListSelector = state => state.carList;
const sortBySelector = state => state.sortBy;

const sortedCarListSelector = createSelector(
  carListSelector,
  sortBySelector,
  (cars, sortBy) => {
    if (sortBy === CAR_LIST_SORTBY.NAME) {
      return sort(car => car[CAR_LIST_SORTBY.NAME])(cars);
    }

    if (sortBy === CAR_LIST_SORTBY.AVAILABILITY) {
      return sort(
        car =>
          car[CAR_LIST_SORTBY.AVAILABILITY] === CAR_AVAILABILITY.IN_DELEARSHIP
      )(cars);
    }

    return cars;
  }
);

export const carListSelectors = createStructuredSelector({
  carList: sortedCarListSelector
});
