import task from "../reducers/Task";
import { createStore, applyMiddleware } from "redux";
// import { devToolEnhancer } from "redux-devtools-extention";
import thunk from "redux-thunk";
// import rootReducers from "../reducers";
const middleware = [thunk];

const store = createStore(task, applyMiddleware(...middleware));

export default store;
