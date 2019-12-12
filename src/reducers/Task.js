// import { uniqueId } from "../actions/add";
// export const tasks = [
//   {
//     id: uniqueId(),
//     title: "Learn Redux",
//     description: "The store, actions, and reducers, oh my!",
//     status: "In Progress"
//   },
//   {
//     id: uniqueId(),
//     title: "Peace on Earth",
//     description: "No big deal.",
//     status: "Unstarted"
//   },
//   {
//     id: uniqueId(),
//     title: "Peace on Earth",
//     description: "No big deal.",
//     status: "Started"
//   }
// ];
const initialState = {
  tasks: [],
  isLoading: false,
  error: ""
};
const task = (state = initialState, action) => {
  if (action.type === "CREATE_TASK") {
    return {
      tasks: state.tasks.concat(action.payload)
    };
  }
  if (action.type === "EDIT_TASK") {
    const { payload } = action;
    return {
      tasks: state.tasks.map(task => {
        if (task.id === payload.id) {
          return Object.assign({}, task, payload.params);
        }

        return task;
      })
    };
  }
  if (action.type === "FETCHTASKSUCESS") {
    return {
      ...state,
      isLoading: false,
      tasks: action.payload.tasks
    };
  }
  if (action.type === "FETCHTASKSTARTED") {
    return {
      ...state,
      isLoading: true
    };
  }
  if (action.type === "FETCHTASKERROR") {
    return {
      ...state,
      isLoading: false,
      error: action.payload.error
    };
  }
  // if (action.type === "CREATE_TASK_SUCCEEDED") {
  //   return {
  //     ...state,
  //     tasks: state.tasks.concat(action.payload.tasks)
  //   };
  // }
  if (action.type === "UPDATE_TASK_SUCCESS") {
    const { payload } = action;
    console.log(payload);
    const nextTasks = state.tasks.map(task => {
      if (task.id === payload.task.id) {
        return payload.task;
      }
      return task;
    });
    return {
      ...state,
      tasks: nextTasks
    };
  }
  return state;
};

export default task;
