import { REMOVE_FROM_FAVOURITES, SEND_TO_FAVOURITES } from "../actions";

const initialState = {
  content: [],
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_TO_FAVOURITES:
      return { ...state, content: [...state.content, action.payload] };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        content: state.content.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default favouriteReducer;
