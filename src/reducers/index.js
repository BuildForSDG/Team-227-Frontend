import { combineReducers } from 'redux';
import authReducer from './authReducer';

/**
 * @constant rootReducers
 * @description Combine all reducers of app
 */
const rootReducers = combineReducers({ authReducer });

export default rootReducers;
