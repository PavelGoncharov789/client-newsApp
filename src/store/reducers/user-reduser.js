import * as actionTypes from '../actionTypes';

const initialState = {
  userData: null,
  loading: false,
  error: null,
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.GET_USER_DATA:
      return {
        ...state,
        loading: true,
        userData: null,
        error: null,
      };
    case actionTypes.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: null,
      };
    case actionTypes.GET_USER_DATA_FAIL:
      return {
        ...state,
        loading: false,
        userData: null,
        error: action.payload,
      };
    case actionTypes.ADD_AVATAR:
      return {
        ...state,
        loading: true,
        userData: null,
        error: null,
      };
    case actionTypes.ADD_AVATAR_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: null,
      };
    case actionTypes.ADD_AVATAR_FAIL:
      return {
        ...state,
        loading: false,
        userData: null,
        error: action.payload,
      };
    default: return state;
  }
}
