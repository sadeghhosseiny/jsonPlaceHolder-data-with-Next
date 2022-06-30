import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";
import { Box } from "@mui/system";
import PostCard from "../../components/postCard";
import Head from "next/head";

function Post({ post }) {
  return (
    <Box
      sx={{ width: "inherit", height: "inherit" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.body} />
        <meta property="og:title" content={post.title} key="ogtitle" />
        <meta property="og:description" content={post.body} key="ogtitle" />
        <meta
          property="og:url"
          content={`http://localhost:3000/posts/${post.id}`}
          key="ogurl"
        />
        <meta property="og:site_name" content="posts" key="ogsite_name" />
        <meta
          name="keywords"
          content="post, data, title, next, redux, jsonplaceholder, id, title, body, "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
