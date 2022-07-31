import {
  GET_USERS_SUCCESS,
  GET_USERS_START,
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
    case GET_USERS_START:
      return { ...state, isLoading: true };
    case GET_USERS_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case GET_USERS_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    case CREATE_USER_START:
      return { ...state, isLoading: true };
    case CREATE_USER_SUCCESS: {
      const updatedData = [...state.data, action.payload];
      return { ...state, data: updatedData, isLoading: false };
    }
    case CREATE_USER_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default reducers;
