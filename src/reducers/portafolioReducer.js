import { GET_INITIAL_DATA } from "../actions/actionTypes";
import { initialState } from "./initialState";

const portafolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_DATA:
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};
export default portafolioReducer;
