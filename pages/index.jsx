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

export default function Home() {
  const posts = useSelector((state) => state?.postsReducer?.postsReducer?.data);
  return (
    <Grid
      container
      padding="20px"
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
    >
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
