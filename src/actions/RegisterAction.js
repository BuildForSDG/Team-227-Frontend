/* eslint-disable import/prefer-default-export */
import * as types from '../constants/registerActionTypes';
import * as APIConfig from '../constants/APIConfig';

/**
 * ACTIONS CREATORS
 */

/**
  * Action creator indiquely to the app that he makes load the result who will come to the API
  * @func registerUser
  * @returns Object
*/
export const registerUser = () => ({
  type: types.SIGN_UP,
  loading: true
});

/**
 * Action Creator indiquely SUCCESS REQUEST API
 * @func registerUserSuccess
 * @param {String} message
 * @returns Object
 */
export const registerUserSuccess = (message) => ({
  type: types.SIGN_UP_SUCCESS,
  payload: { message },
  loading: false
});

/**
 * Action creator indiquely FAILED REQUEST API
 * @func registerUserFailed
 * @param {Object} error
 * @returns Object
 */
export const registerUserFailed = (error) => ({
  type: types.SIGN_UP_FAILED,
  payload: { error },
  loading: false
});

/**
 * THUNK
 * @func fetchRegisterUser
 * @param {Objejct} {}
 * @prop {String} firstName
 * @prop {String} lastName
 * @prop {String} phoneNumber
 * @prop {String} password
 * @prop {String} gender
 */
export const fetchRegisterUser = ({
  firstName, lastName, phoneNumber, password, gender
}, even) => (dispatch) => {
  dispatch(registerUser());
  if (firstName === '' || lastName === '' || phoneNumber === '' || password === '' || gender === '') {
    const error = new Error('The Field is empty !');
    return dispatch(registerUserFailed(error));
  }
  const isNumber = /[0-9]/;
  if (!phoneNumber.match(isNumber)) {
    const error = Error('Phone number is invalid !');
    return dispatch(registerUserFailed(error));
  }

  return fetch(`${APIConfig.API_URI}/register`, {
    method: 'POST',
    body: {
      firstName,
      lastName,
      phoneNumber,
      password,
      gender
    },
    headers: APIConfig.HEADERS
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error - 401 Unauthorized');
      }
      even.reset();
      return response.json();
    })
    .then((message) => dispatch(registerUserSuccess(message)))
    .catch((error) => dispatch(registerUserFailed(error)));
};
