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
// const editTaskReducer = (state = { tasks: tasks }, action) => {
//   if (action.type === "EDIT_TASK") {
//     console.log(action.payload);
//     return {
//       tasks: state.tasks.map(task => {
//         // console.log(task);
//         if (task.id == action.payload.id) {
//           return Object.assign({}, task, action.payload.params);
//         }
//       })
//     };
//   }
//   return state;
// };

// export default editTaskReducer;
