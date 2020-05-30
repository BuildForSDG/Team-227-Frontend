/* eslint no-undef: "error" */

import { fetchAuthUser, authUserError, authUserSuccess } from '../../actions/authAction';
import * as types from '../../constants/authActionTypes';

describe('Action Auth', () => {
  it('should return Action creator error', () => {
    const error = {
      message: 'The field is empty !'
    };
    expect(authUserError(error)).toEqual({
      type: types.SIGN_IN_ERROR,
      payload: { error },
      loading: false
    });
  });
  it('should return Action creator success', () => {
    const token = 'Torador-Corporation2019//';
    expect(authUserSuccess(token)).toEqual({
      type: types.SIGN_IN_SUCCESS,
      payload: { token },
      loading: false
    });
  });
});

describe('Thunk auth', () => {
  it('should return error value', () => {
    const dataTest = {
      phoneNumber: '',
      password: ''
    };
    const errorFunction = jest.fn(() => fetchAuthUser(dataTest));
    errorFunction();
    expect(errorFunction).toHaveReturned();
  });
  it('should return success request', () => {
    const dataTest = {
      phoneNumber: '697040511',
      password: 'qwertyKeyboard'
    };
    const successMock = jest.fn(() => fetchAuthUser(dataTest));
    successMock();
    expect(successMock).toHaveReturned();
  });
});
