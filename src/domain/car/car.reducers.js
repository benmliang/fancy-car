import { combineReducers } from 'redux';
import { UPDATE_CARS_SORTBY } from './car.actions';
import { carsSortByReducer } from './car-sort-dropdown';

export const reducers = combineReducers({
  sortBy: carsSortByReducer,
  carAvailabilities: (a = {}) => a,
  carList: (a = [], b) => console.log('a: ', a, b) || a
});
