import { createAction } from 'redux-actions';

import * as actionTypes from '../actionTypes';

export const addUserAction = createAction(actionTypes.SIGN_UP_USER);
