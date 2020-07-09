import axios from "axios";
import {
  actionType,
  REQUEST_USER_DETAILS,
  RECEIVE_USER_DETAILS,
  RECEIVE_REPO_DETAILS,
  RECEIVE_COMMIT_DETAILS,
  RECEIVE_CONTRIBUTION_DETAILS,
} from "./Type";
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

export const getRepos = (userInput: string) => async (dispatch: any) => {
  const responseRepo = await axios.get(
    `https://api.github.com/users/${userInput}/repos?sort=updated`
  );
  //console.log(responseRepo.data);
  dispatch({
    type: RECEIVE_REPO_DETAILS,
    data: responseRepo.data,
  });
  const repoArray = responseRepo.data.map((item: any) => item.name);
  //console.log(repoArray);
  for (let i = 0; i < repoArray.length; i++) {
    //console.log(repoArray[i]);
    dispatch(getCommits(userInput, repoArray[i], i));
  }
};

const arrayCommit: any[] = [];
const getCommits = (userInput: string, repoName: string, i: number) => async (
  dispatch: any
) => {
  const headers = {
    "Content-Type": "text/plain",
  };
  const responseCommit = await axios.get(
    `https://api.github.com/repos/${userInput}/${repoName}/commits?sort=updated`,
    { headers }
  );
  //console.log(responseCommit.data);
  //console.log(i);
  arrayCommit[i] = responseCommit.data.length;
  //console.log(array1.length);
  //console.log(array1);
  const totalCommit = arrayCommit.reduce(function (a, b) {
    return a + b;
  }, 0);
  //console.log(totalCommit);

  dispatch({
    type: RECEIVE_COMMIT_DETAILS,
    data: totalCommit,
  });
};

const getContributions = (userInput: string) => async (dispatch: any) => {
  const responseContributions = await axios.get(
    `https://github-contributions-api.now.sh/v1/${userInput}`
  );
  const contributionData = responseContributions.data.years;
  dispatch({
    type: RECEIVE_CONTRIBUTION_DETAILS,
    data: contributionData,
  });
  console.log(contributionData);
};

export const getData = (
  userInput: string,
  event: any
): ThunkAction<void, appState, null, Action<string>> => async (dispatch) => {
  event.preventDefault();
  const responseData = await axios.get(
    `https://api.github.com/users/${userInput}`
  );
  //console.log("action data fetched");
  dispatch({
    type: RECEIVE_USER_DETAILS,
    data: responseData.data,
    event: event,
  });
  dispatch(getContributions(userInput));
};
