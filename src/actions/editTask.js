// import { dispatch } from "rxjs/internal/observable/range";
import * as api from "../api";
export default function updateTask(id, params = {}) {
  return {
    type: "EDIT_TASK",
    payload: {
      id,
      params
    }
  };
}

// const UpdateTasksSuccess = tasks => {
//   return {
//     type: "UPDATE_TASK_SUCCESS",
//     payload: {
//       tasks
//     }
//   };
// };

// const updateTask = ({ id, params = {} }) => {
//   console.log(id);
//   return (dispatch, getState) => {
//     const task = getTaskById(getState().tasks, id);
//     const updatedTask = Object.assign({}, task, params);

//     api.updateTasks({ id, updatedTask }).then(res => {
//       dispatch(UpdateTasksSuccess(res.data));
//     });
//   };
// };

// const getTaskById = (tasks, id) => {
//   return tasks.find(task => task.id === id);
// };

// export default updateTask;
