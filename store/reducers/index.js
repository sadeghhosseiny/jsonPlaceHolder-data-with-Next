import { HYDRATE } from "next-redux-wrapper";
import { ACTION_TYPES } from "../../constants/actionTypes";

const initialState = {
  requesting: false,
  success: false,
  error: "",
  data: null,
};

const getPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...action.payload };
    }

    case ACTION_TYPES.REQUESTING: {
      return {
        requesting: true,
        success: false,
        error: "",
        data: null,
      };
    }
    case ACTION_TYPES.SUCCESS: {
      return {
        requesting: false,
        success: true,
        error: "",
        data: action.payload,
      };
    }
    case ACTION_TYPES.ERROR: {
      return {
        requesting: false,
        success: false,
        error: action.payload,
        data: null,
      };
    }
    default:
      return state;
  }
};

export default getPostsReducer;
