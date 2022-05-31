import * as actionTypes from '../actionTypes';

const initialState = {
  user: null,
  loadingSingUp: false,
  loadingSingIn: false,
  error: null,
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.SIGN_UP_USER:
      return {
        ...state,
        loadingSingUp: true,
        error: null,
      };
    case actionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        loadingSingUp: false,
        error: null,
      };
    case actionTypes.SIGN_UP_FAIL:
      return {
        ...state,
        loadingSingUp: false,
        user: null,
        error: action.payload,
      };
    case actionTypes.SIGN_IN_USER:
      return {
        ...state,
        loadingSingIn: true,
        error: null,
      };
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loadingSingIn: false,
        user: action.payload,
        error: null,
      };
    case actionTypes.SIGN_IN_FAIL:
      return {
        ...state,
        loadingSingIn: false,
        user: null,
        error: action.payload,
      };
    case actionTypes.WHOAMI:
      return {
        ...state,
        loadingSingIn: true,
        error: null,
      };
    case actionTypes.WHOAMI_SUCCESS:
      return {
        ...state,
        loadingSingIn: false,
        user: action.payload,
        error: null,
      };
    case actionTypes.WHOAMI_FAIL:
      return {
        ...state,
        loadingSingIn: false,
        user: null,
        error: action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        loadingSingIn: true,
        error: null,
      };
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        loadingSingIn: true,
        user: null,
        error: null,
      };
    case actionTypes.LOGOUT_FAIL:
      return {
        ...state,
        loadingSingIn: false,
        error: action.payload,
      };
    default: return state;
  }
}
