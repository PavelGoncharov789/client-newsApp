import { createAction } from 'redux-actions';

import * as actionTypes from '../actionTypes';

export const getNewsAction = createAction(actionTypes.GET_NEWS);

export const getNewsSuccessAction = createAction(actionTypes.GET_NEWS_SUCCESS);

export const getNewsFailAction = createAction(actionTypes.GET_NEWS_FAIL);
