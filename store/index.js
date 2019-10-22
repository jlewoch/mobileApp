import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducers, rootSagas } from './roots';

const saga = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(saga));
saga.run(rootSagas);

export default store;
