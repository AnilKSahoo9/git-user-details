import {
  actionType,
  REQUEST_USER_DETAILS,
  RECEIVE_USER_DETAILS,
  RECEIVE_REPO_DETAILS,
  RECEIVE_COMMIT_DETAILS,
  RECEIVE_CONTRIBUTION_DETAILS,
} from "./Type";

export interface InitialState {
  userInput: string;
  isFetching: boolean;
  userId: string;
  profileUrl: string;
  emailId: string;
  fullName: string;
  followers: number;
  following: number;
  bio: string;
  location: string;
  website: string;
  company: string;
  githubUrl: string;
  repos: [];
  totalCommit: number;
  contributions: [];
}

export const initialState: InitialState = {
  userInput: "",
  isFetching: false,
  userId: "",
  profileUrl: "",
  emailId: "",
  fullName: "",
  followers: 0,
  following: 0,
  bio: "",
  location: "",
  website: "",
  company: "",
  githubUrl: "",
  repos: [],
  totalCommit: 0,
  contributions: [],
};

const reducer = (state = initialState, action: actionType): InitialState => {
  switch (action.type) {
    case REQUEST_USER_DETAILS:
      //console.log((action.event.target as HTMLInputElement).value);
      return {
        ...state,
        userInput: (action.event.target as HTMLInputElement).value,
      };
    case RECEIVE_USER_DETAILS:
      //console.log("Reducer Data fetched");
      return {
        ...state,
        userId: action.data.login,
        profileUrl: action.data.avatar_url,
        emailId: action.data.email,
        fullName: action.data.name,
        followers: action.data.followers,
        following: action.data.following,
        bio: action.data.bio,
        location: action.data.location,
        website: action.data.blog,
        company: action.data.company,
        githubUrl: action.data.html_url,
        isFetching: true,
      };
    case RECEIVE_REPO_DETAILS:
      //console.log(action.data);
      return {
        ...state,
        repos: action.data,
      };
    case RECEIVE_COMMIT_DETAILS:
      return {
        ...state,
        totalCommit: action.data,
      };
    case RECEIVE_CONTRIBUTION_DETAILS:
      return {
        ...state,
        contributions: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
