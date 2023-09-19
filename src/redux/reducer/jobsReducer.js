import { SET_JOBS, SET_JOBS_ERROR_OFF, SET_JOBS_ERROR_ON, SET_JOBS_LOADING_OFF, SET_JOBS_LOADING_ON } from "../actions";

const initialState = {
  content: [],
  isLoading: false,
  hasError: false,
  errorMessage: "",
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return { ...state, content: action.payload };
    case SET_JOBS_LOADING_ON:
      return { ...state, isLoading: true };
    case SET_JOBS_LOADING_OFF:
      return { ...state, isLoading: false };
    case SET_JOBS_ERROR_ON:
      return { ...state, hasError: true, errorMessage: action.payload };
    case SET_JOBS_ERROR_OFF:
      return { ...state, hasError: false, errorMessage: "" };
    default:
      return state;
  }
};

export default jobsReducer;
