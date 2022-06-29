import { ACTION_TYPES } from "../../constants/actionTypes";

export const getPosts = (payload) => ({
  type: ACTION_TYPES.SUCCESS,
  payload,
});

export const req = () => ({
  type: ACTION_TYPES.REQUESTING,
});

export const error = (payload) => ({
  type: ACTION_TYPES.ERROR,
  payload,
});
