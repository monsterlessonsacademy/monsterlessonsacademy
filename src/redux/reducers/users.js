import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
} from "../actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_START: {
      return { ...state, isLoading: true };
    }
    case GET_USERS_SUCCESS: {
      return { ...state, isLoading: false, data: action.payload };
    }
    case GET_USERS_FAILURE: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case CREATE_USER_START: {
      return { ...state, isLoading: true };
    }
    case CREATE_USER_SUCCESS: {
      const updatedUsers = [...state.data, action.payload];
      return { ...state, isLoading: false, data: updatedUsers };
    }
    case CREATE_USER_FAILURE: {
      return { ...state, isLoading: false, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default reducers;
