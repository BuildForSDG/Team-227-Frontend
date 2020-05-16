import { combineReducers } from 'redux';
import { initialStore } from './Store/fightHungerStore';

/**
 * @constant rootReducers
 * @description The central store of app
 */
const rootReducers = combineReducers({ initialStore });

export default rootReducers;
