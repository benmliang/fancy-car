import { sort } from 'ramda';
import { createSelector, createStructuredSelector } from 'reselect';

const carListSelector = state => state.carList;
const sortBySelector = state => state.sortBy;

const sortedCarListSelector = createSelector(
  carListSelector,
  sortBySelector,
  (cars, sortBy) => {
    return sort(car => car[sortBy])(cars);
  }
);

export const carListSelectors = createStructuredSelector({
  carList: sortedCarListSelector
});
