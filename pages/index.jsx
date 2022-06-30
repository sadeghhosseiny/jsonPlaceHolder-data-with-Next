import { useSelector } from "react-redux";
import { request } from "../services/apiRequest";
import { wrapper } from "../store";
import {
  Card,
  CardHeader,
  Typography,
  CardActions,
  CardContent,
  Collapse,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import PostCard from "../components/postCard";
import Head from "next/head";

export default function Home() {
  const posts = useSelector((state) => state?.postsReducer?.postsReducer?.data);
  return (
    <Grid
      container
      padding="20px"
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
    >
      <Head>
        <title>Posts from JsonPlaceHolder</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="a webApp created by next, redux thunk, material-UI and axios that fetching data from jsonplaceholder.typicode.com
          and shows Posts"
        />
        <meta
          property="og:title"
          content="posts from jsonplaceholder"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="a webApp created by next and fetching posts from jsonplaceholder.typicode.com"
          key="ogtitle"
        />
        <meta property="og:url" content="http://localhost:3000/" key="ogurl" />
        <meta property="og:site_name" content="posts" key="ogsite_name" />
        <meta
          name="keywords"
          content="posts, data, title, next, redux, jsonplaceholder, id, title, body"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {posts.slice(0, 20).map((post, index) => (
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={3}
          key={post.id}
          sx={{ width: "inherit", height: "inherit" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box width="100%" height="100%">
            <PostCard post={post} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({}) => {
      await store.dispatch(request());
    }
);
