import * as api from "../api";
let _id = 1;
export function uniqueId() {
  return _id++;
}

// const createTaskSucess = tasks => {
//   return {
//     type: "CREATE_TASK_SUCCEEDED",
//     payload: {
//       tasks
//     }
//   };
// };
// function createTask({ title, description, status = "unStarted" }) {
//   return dispatch => {
//     api.saveTasks({ title, description, status }).then(res => {
//       dispatch(createTaskSucess(res.data));
//     });
//   };
// }

// function createTaskSucess(tasks) {
//   return {
//     type: "CREATE_TASK_SUCCEEDED",
//     payload: {
//       tasks
//     }
//   };
// }

// export function createTask({ title, description, status = "Unstarted" }) {
//   return dispatch => {
//     api.saveTasks({ title, description, status }).then(resp => {
//       dispatch(createTaskSucess(resp.data));
//     });
//   };
// }

const createTask = ({ title, description }) => {
  return {
    type: "CREATE_TASK",
    payload: {
      id: uniqueId(),
      title,
      description,
      status: "Unstarted"
    }
  };
};
export default createTask;
