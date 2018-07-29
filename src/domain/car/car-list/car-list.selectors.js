import { createSelector, createStructuredSelector } from 'reselect';

const carListSelector = state => state.carList;
const sortBySelector = state => state.sortBy;

const sortedCarListSelector = createSelector(
  carListSelector,
  sortBySelector,
  (cars, sortBy) => {
    console.log('sortBy: ', sortBy);
    console.log('cars: ', cars);
    console.log(
      'cars.sort(car => car[sortBy]): ',
      cars.sort(car => car[sortBy])
    );
    return cars.sort(car => car[sortBy]);
  }
);

export const carListSelectors = createStructuredSelector({
  carList: sortedCarListSelector
});
