import { combineReducers } from 'redux';
import { UPDATE_CARS_SORTBY } from './car.actions';
import { carsSortByReducer } from './car-sort-dropdown';

const CAR_AVAILABILITY = {
  IN_DELEARSHIP: 'In Dealership',
  OUT_OF_STOCK: 'Out of Stock',
  UNAVAILABLE: 'Unavailable'
};

export const reducers = combineReducers({
  sortBy: carsSortByReducer,
  carAvailabilities: (a = {}) => a,
  carList: (a = [], b) => console.log('a: ', a, b) || a
});
