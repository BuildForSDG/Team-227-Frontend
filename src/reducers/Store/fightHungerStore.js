/* eslint-disable import/prefer-default-export */
/**
 * @constant initialStore
 * @description initial store of App
 */

export const initialStore = {
  User: [],
  Domain: [],
  currentUser: {
    token: ''
  },
  error: {},
  success: {
    message: ''
  },
  isAuth: false,
  loading: false
};
