export const SET_JOBS = "SET_JOBS";
export const SET_COMPANY = "SET_COMPANY";
export const SEND_TO_FAVOURITES = "SEND_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_JOBS_LOADING_ON = "SET_JOBS_LOADING_ON";
export const SET_JOBS_LOADING_OFF = "SET_JOBS_LOADING_OFF";
export const SET_JOBS_ERROR_ON = "SET_JOBS_ERROR_ON";
export const SET_JOBS_ERROR_OFF = "SET_JOBS_ERROR_OFF";

export const setJobsAction = (data) => ({ type: SET_JOBS, payload: data });
export const setCompanyAction = (data) => ({ type: SET_COMPANY, payload: data });
export const sendToFavouriteAction = (params) => ({ type: SEND_TO_FAVOURITES, payload: params });
export const removeFromFavouriteAction = (i) => ({ type: REMOVE_FROM_FAVOURITES, payload: i });

export const getJobsAction = (params) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_JOBS_LOADING_ON });
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=" + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setCompanyAction(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: SET_JOBS_LOADING_OFF });
    }
  };
};

export const handleSubmitAction = (query) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_JOBS_LOADING_ON });
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobsAction(data));
        dispatch({ type: SET_JOBS_ERROR_OFF });
      } else {
        alert("Error fetching results");
        throw new Error("error");
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: SET_JOBS_ERROR_ON, payload: error.message });
    } finally {
      dispatch({ type: SET_JOBS_LOADING_OFF });
    }
  };
};
