import { actionType, REQUEST_USER_DETAILS, RECEIVE_USER_DETAILS } from "./Type";

export interface InitialState {
  userInput: string;
  userId: string;
  profileUrl: string;
  emailId: string;
  fullName: string;
}

export const initialState: InitialState = {
  userInput: "",
  userId: "",
  profileUrl: "",
  emailId: "",
  fullName: "",
};

const reducer = (state = initialState, action: actionType): InitialState => {
  switch (action.type) {
    case REQUEST_USER_DETAILS:
      console.log((action.event.target as HTMLInputElement).value);
      return {
        ...state,
        userInput: (action.event.target as HTMLInputElement).value,
      };
    case RECEIVE_USER_DETAILS:
      console.log("Data fetched");
      return {
        ...state,
        userId: action.data.login,
        profileUrl: action.data.avatar_url,
        emailId: action.data.email,
        fullName: action.data.name,
      };

    default:
      return state;
  }
};

export default reducer;
