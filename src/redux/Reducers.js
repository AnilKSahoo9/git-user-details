import { REQUEST_USER_DETAILS, RECEIVE_USER_DETAILS } from "./ActionCreate";

const initialState = {
  userInput: "",
  data: "",
  userId: "",
  profileUrl: "",
  emailId: null,
  fullName: "",
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_USER_DETAILS:
      return {
        ...state,
        userInput: action.name,
      };
    case RECEIVE_USER_DETAILS:
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

export default reducers;
