import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { reducers } from './car.reducers';
import { initialState } from './car.store';
import { CarListContainer } from './car-list';
import { rootSaga } from './car.saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export const ConnectedCarListContainer = () => (
  <Provider store={store}>
    <CarListContainer />
  </Provider>
);
