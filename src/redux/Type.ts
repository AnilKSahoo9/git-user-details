import { SyntheticEvent } from "react";

export const REQUEST_USER_DETAILS = "REQUEST_USER_DETAILS";

export const RECEIVE_USER_DETAILS = "RECEIVE_USER_DETAILS";

export const RECEIVE_REPO_DETAILS = "RECEIVE_REPO_DETAILS";

export const RECEIVE_COMMIT_DETAILS = "RECEIVE_COMMIT_DETAILS";

export const RECEIVE_CONTRIBUTION_DETAILS = "RECEIVE_CONTRIBUTION_DETAILS";

interface RequestUserDetails {
  type: typeof REQUEST_USER_DETAILS;
  event: SyntheticEvent;
}

interface ReceiveUserDetails {
  type: typeof RECEIVE_USER_DETAILS;
  data: any;
  event: SyntheticEvent;
}

interface ReceiveRepoDetails {
  type: typeof RECEIVE_REPO_DETAILS;
  data: any;
}

interface ReceiveCommitDetails {
  type: typeof RECEIVE_COMMIT_DETAILS;
  data: any;
}

interface ReceiveContributionDetails {
  type: typeof RECEIVE_CONTRIBUTION_DETAILS;
  data: any;
}
export type actionType =
  | RequestUserDetails
  | ReceiveUserDetails
  | ReceiveRepoDetails
  | ReceiveCommitDetails
  | ReceiveContributionDetails;
