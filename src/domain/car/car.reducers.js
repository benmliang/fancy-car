import { combineReducers } from 'redux';
import { carsSortByReducer } from './car-sort-dropdown';
import { carsListReducer } from './car-list';

export const reducers = combineReducers({
  sortBy: carsSortByReducer,
  carAvailabilities: (a = {}) => a,
  carList: carsListReducer
});
