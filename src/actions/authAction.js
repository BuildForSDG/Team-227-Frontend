/* eslint-disable import/prefer-default-export */
import * as types from '../constants/authActionTypes';
/**
 * Action Creator for authentification
 * @constant authUser
 * @param {Object} dataAuth
 * @returns Object
 */
export const authUser = (dataAuth) => ({
  type: types.SIGN_IN,
  data: dataAuth
});
