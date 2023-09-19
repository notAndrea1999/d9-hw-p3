import { SET_COMPANY } from "../actions";

const initialState = {
  content: [],
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANY:
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

export default companyReducer;
