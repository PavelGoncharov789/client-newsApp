import * as actionTypes from '../actionTypes';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.SIGN_IN_USER:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case actionTypes.SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };
    default: return state;
  }
}
