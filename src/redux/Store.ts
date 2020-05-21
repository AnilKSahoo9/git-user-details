import { createStore, applyMiddleware } from "redux";
import reducer from "./Reducers";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { actionType } from "./Type";

export type appState = ReturnType<typeof reducer>;

const Store = createStore(
  reducer,
  applyMiddleware(thunk as ThunkMiddleware<appState, actionType>)
);

export default Store;
