import { GET_INITIAL_DATA, GET_POST_BLOG_BY_ID, SET_POSTS_BLOG } from "./actionTypes";

export const getInitialData = () => {
  return {
    type: GET_INITIAL_DATA,
  };
};

export const getPostBlogById = () => {
  return {
    type: GET_POST_BLOG_BY_ID,
  };
};

export const setPostsBlog = () => {
  return {
    type: SET_POSTS_BLOG,
  };
};