/* eslint-disable import/prefer-default-export */
import * as types from '../constants/authActionTypes';
import * as APIConfig from '../constants/APIConfig';
/**
 * ACTIONS CREATORS
 */


/**
 * Action Creator indiquely to the app that he makes load the result who will come to the API
 * @func authUser
 * @returns Object
 */
export const authUser = () => ({
  type: types.SIGN_IN,
  loading: true
});

/**
 * Action Creator indiquely SUCCESS REQUEST API,
 * @func authUserSuccess
 * @param {String} token
 * @returns Object
 */
export const authUserSuccess = (token) => ({
  type: types.SIGN_IN_SUCCESS,
  payload: { token },
  loading: false
});

/**
 * Action Creator indiquely ERROR REQUEST API
 * @func authUserError
 * @param {Object} error
 * @return Object
 */
export const authUserError = (error) => ({
  type: types.SIGN_IN_ERROR,
  loading: false,
  payload: { error }
});

/**
 *  THUNK
 * @func fetchAuthUser
 * @param {Object} {}
 * @prop {String} phoneNumber
 * @prop {String} password
 */
export const fetchAuthUser = ({ phoneNumber, password }) => (dispatch) => {
  dispatch(authUser());
  return fetch(`${APIConfig.API_URI}/auth`, {
    method: 'POST',
    body: {
      phoneNumber,
      password
    },
    headers: APIConfig.HEADERS
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error - 401 Unauthorized');
      }
      return response.json();
    })
    .then((token) => {
      dispatch(authUserSuccess(token));
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
      dispatch(authUserError(error));
    });
};
