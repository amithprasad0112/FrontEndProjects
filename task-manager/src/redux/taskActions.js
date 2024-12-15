import axios from "axios";

import {
  FETCH_TASK_FAILURE,
  FETCH_TASK_REQUEST,
  FETCH_TASK_SUCCESS,
} from "./types";

const api_url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTasks = () => async (dispatch) => {
  dispatch({ type: FETCH_TASK_REQUEST });
  try {
    const response = await axios.get(api_url);
    dispatch({ type: FETCH_TASK_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: FETCH_TASK_FAILURE, payload: err.message });
  }
};
