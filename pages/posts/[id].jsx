import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";
import { Box } from "@mui/system";
import PostCard from "../../components/postCard";

function Post({ post }) {
  return (
    <Box
      sx={{ width: "inherit", height: "inherit" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="100%" maxWidth="445px" height="500px">
        <PostCard post={post} />
      </Box>
    </Box>
  );
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
