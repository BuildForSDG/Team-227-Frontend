import * as types from '../constants/registerActionTypes';
import { initialStore } from './Store/fightHungerStore';

/**
 * REDUCER REGISTER
 */

const registerReducer = (state = initialStore, action = {}) => {
  switch (action.type) {
    case types.SIGN_UP:
      return {
        ...state,
        loading: action.loading
      };
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        success: {
          ...state.success,
          message: action.payload.message
        }
      };
    case types.SIGN_UP_FAILED:
      return {
        ...state,
        loading: action.loading,
        error: action?.payload?.error
      };
    default:
      return state;
  }
};

export default registerReducer;
