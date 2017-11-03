import { combineReducers } from 'redux';
import reducer from './todoReducer';

export default function createReducer() {
  return combineReducers({
    todos: reducer,
  });
}