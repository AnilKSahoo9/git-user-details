import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducers";
import thunk from "redux-thunk";

const Store = createStore(reducers, applyMiddleware(thunk));

export default Store;
