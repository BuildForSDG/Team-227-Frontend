import * as types from '../constants/authActionTypes';
import { initialStore } from './Store/fightHungerStore';
/**
 * REDUCER AUTH
 */
/**
 * @func authReducer
 * @param {Object} state
 * @param {Object} action
 * @returns Object
 */

const authReducer = (state = initialStore, action = {}) => {
  switch (action.type) {
    case types.SIGN_IN:
      return {
        ...state,
        loading: action.loading
      };
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          token: action?.payload?.token
        },
        isAuth: !!action.payload.token,
        loading: action.loading
      };
    case types.SIGN_IN_ERROR:
      return {
        ...state,
        error: action?.payload?.error,
        loading: action.loading
      };
    default:
      return state;
  }
};

export default authReducer;
