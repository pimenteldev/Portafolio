import { GET_INITIAL_DATA, GET_POST_BLOG_BY_ID, SET_POSTS_BLOG } from "../actions/actionTypes";
import { initialState } from "./initialState";

const portafolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_DATA:
      return { ...state, projects: action.payload };
    case SET_POSTS_BLOG:
      return { ...state, posts: action.payload };
    case GET_POST_BLOG_BY_ID:{
      const post = state.posts.filter(item=> item.id === parseInt(action.payload))
      return { ...state, post: post };
    }
    default:
      return state;
  }
};
export default portafolioReducer;
