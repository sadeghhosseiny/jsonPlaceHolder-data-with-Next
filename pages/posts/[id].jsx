import React from "react";
import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";

function Post({ post }) {
  return <div></div>;
}

export async function getServerSideProps(context) {
  const id = context.query.id;
  const res = await axios.get(`${baseUrl}/posts/${id}`).then((res) => res.data);
  return {
    props: {
      post: res,
    },
  };
}

export default Post;
