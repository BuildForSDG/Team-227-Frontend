import { combineReducers } from 'redux';
import authReducer from './authReducer';
import registerReducer from './registerReducer';

/**
 * @constant rootReducers
 * @description Combine all reducers of app
 */
const rootReducers = combineReducers({ authReducer, registerReducer });

export default rootReducers;
