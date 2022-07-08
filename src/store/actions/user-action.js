import { createAction } from 'redux-actions';

import * as actionTypes from '../actionTypes';

export const getUserDataAction = createAction(actionTypes.GET_USER_DATA);

export const getUserDataSuccessAction = createAction(actionTypes.GET_USER_DATA_SUCCESS);

export const getUserDataFailAction = createAction(actionTypes.GET_USER_DATA_FAIL);

export const addAvatarAction = createAction(actionTypes.ADD_AVATAR);

export const addAvatarSuccessAction = createAction(actionTypes.ADD_AVATAR_SUCCESS);

export const addAvatarFailAction = createAction(actionTypes.ADD_AVATAR_FAIL);
