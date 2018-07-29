import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducers } from './car.reducers';
import { initialState } from './car.store';
import { CarListContainer } from './car-list';
import logger from 'redux-logger';

const store = createStore(reducers, initialState, applyMiddleware(logger));
console.log('store: ', store.getState());
global.store = store;

export const ConnectedCarListContainer = () => (
  <Provider store={store}>
    <CarListContainer />
  </Provider>
);
