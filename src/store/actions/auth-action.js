import { createAction } from 'redux-actions';

import * as actionTypes from '../actionTypes';

export const addUserAction = createAction(actionTypes.SIGN_UP_USER);

export const signUpSuccessAction = createAction(actionTypes.SIGN_UP_SUCCESS);

export const signUpFailAction = createAction(actionTypes.SIGN_UP_FAIL);

export const logInUserAction = createAction(actionTypes.SIGN_IN_USER);

export const logInSuccessAction = createAction(actionTypes.SIGN_IN_SUCCESS);

export const logInFailAction = createAction(actionTypes.SIGN_IN_FAIL);

export const whoAmI = createAction(actionTypes.WHOAMI);

export const whoAmISuccess = createAction(actionTypes.WHOAMI_SUCCESS);

export const whoAmFail = createAction(actionTypes.WHOAMI);

export const logOut = createAction(actionTypes.LOGOUT);
