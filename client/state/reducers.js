import { createStore, combineReducers } from 'redux';
import AppReducer from './app/reducer.js';

const rootReducer = combineReducers({
  app: AppReducer
});

export const store = createStore(rootReducer);