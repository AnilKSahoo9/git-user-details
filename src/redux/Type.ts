import { SyntheticEvent } from "react";

export const REQUEST_USER_DETAILS = "REQUEST_USER_DETAILS";

export const RECEIVE_USER_DETAILS = "RECEIVE_USER_DETAILS";

interface RequestUserDetails {
  type: typeof REQUEST_USER_DETAILS;
  event: SyntheticEvent;
}

interface ReceiveUserDetails {
  type: typeof RECEIVE_USER_DETAILS;
  data: any;
  event: SyntheticEvent;
}

export type actionType = RequestUserDetails | ReceiveUserDetails;
