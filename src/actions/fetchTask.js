// import Axios from /"axios";
// import { dispatch } from "rxjs/internal/observable/range";
import * as api from "../api";

const fetchTaskSucess = tasks => {
  return {
    type: "FETCHTASKSUCESS",
    payload: {
      tasks
    }
  };
};
const fetchTaskError = error => {
  return {
    type: "FETCHTASKERROR",
    payload: {
      error
    }
  };
};
const fetchTaskStarted = () => {
  return {
    type: "FETCHTASKSTARTED"
  };
};
const fetchTask = () => {
  return dispatch => {
    dispatch(fetchTaskStarted());
    api
      .fetchTasks()
      .then(res => {
        setTimeout(() => {
          dispatch(fetchTaskSucess(res.data));
        }, 2000);
      })
      .catch(err => {
        dispatch(fetchTaskError(err.message));
      });
  };
};

export default fetchTask;
