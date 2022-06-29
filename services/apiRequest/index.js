import axios from "axios";
import { ACTION_TYPES } from "../../constants/actionTypes";
import { baseUrl } from "../../constants/baseUrl";
import { error, getPosts } from "../../store/actions";

export const request = () => async (dispatch) => {
  // const { data } = await axios.get(
  //   "https://jsonplaceholder.typicode.com/posts"
  // );

  return axios
    .get(`${baseUrl}/posts`)
    .then((res) => {
      const data = res.data;
      return dispatch(getPosts(data));
    })
    .catch((err) => {
      return error(err.message);
    });
};
