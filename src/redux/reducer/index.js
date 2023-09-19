// const initialState = {
// jobs: {
//   content: [],
// },
// company: {
//   content: [],
// },
// preferiti: {
//   content: [],
// },
// };

// const mainReducer = (state = initialState, action) => {
// switch (action.type) {
// case "SET_JOBS":
//   return { ...state, jobs: { ...state.jobs, content: action.payload } };

// case "SET_COMPANY":
//   return { ...state, company: { ...state.company, content: action.payload } };

// case "SEND_TO_FAVOURITES":
//   return { ...state, preferiti: { ...state.preferiti, content: [...state.preferiti.content, action.payload] } };

// case "REMOVE_FROM_FAVOURITES":
//   return {
//     ...state,
//     preferiti: { ...state.preferiti, content: state.preferiti.content.filter((_, i) => i !== action.payload) },
//   };

//     default:
//       return state;
//   }
// };

// export default mainReducer;
