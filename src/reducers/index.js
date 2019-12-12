import { combineReducers } from "redux";
import editTaskReducer from "./editTaks";
import task from "./Task";

const rootReducers = combineReducers({ task, editTaskReducer });

export default rootReducers;
