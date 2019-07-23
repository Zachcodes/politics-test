import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import senatorReducer from './senatorReducer';
import representativeReducer from './representativeReducer';

const rootReducer = combineReducers({
  senators: senatorReducer,
  reps: representativeReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
