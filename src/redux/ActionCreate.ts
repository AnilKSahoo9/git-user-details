import axios from "axios";
import { actionType, REQUEST_USER_DETAILS, RECEIVE_USER_DETAILS } from "./Type";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { ActionCreator } from "redux";
import { appState } from "./Store";

export const getUser: ActionCreator<actionType> = (event) => {
  return {
    type: REQUEST_USER_DETAILS,
    event: event,
  };
};

export const getData = (
  userInput: string,
  event: any
): ThunkAction<void, appState, null, Action<string>> => async (dispatch) => {
  event.preventDefault();
  const res = await axios.get(`https://api.github.com/users/${userInput}`);
  console.log("data fetched");
  dispatch({
    type: RECEIVE_USER_DETAILS,
    data: res.data,
    event: event,
  });
};
