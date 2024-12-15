import {
  FETCH_TASK_FAILURE,
  FETCH_TASK_REQUEST,
  FETCH_TASK_SUCCESS,
} from "./types";

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: action.payload,
      };
    case FETCH_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
