import {combineReducers} from 'redux';
import { IAction } from '../interfaces';

const initialState = {
  level: 0,
  score: 0,
}

const levelReducer = (state=initialState, action:IAction) => {
  return state;
}

const scoreReducer = (state=initialState, action:IAction) => {
  return state;
}

export const rootReducer = combineReducers({
  level: levelReducer,
  score: scoreReducer
})
