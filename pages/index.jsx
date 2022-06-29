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
          <Box width="400px">
            <Card
              sx={{
                maxWidth: 400,
                height: 300,
                boxShadow: "2px 2px 3px #acacad",
                ":hover": {
                  boxShadow: "8px 5px 5px #acacad",
                },
              }}
            >
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    {post.id}
                  </Avatar>
                }
                title={
                  <Typography style={{ fontWeight: "bold" }}>
                    {post.title}
                  </Typography>
                }
                subheader="September 14, 2016"
              />
              <CardActions sx={{ justifyContent: "end" }} disableSpacing>
                {/* <IconButton>
                  <ExpandMoreIcon
                    sx={
                      expand
                        ? {
                            transform: "rotate(180deg)",
                            transition: "0.3s",
                          }
                        : {
                            transform: "rotate(0deg)",
                            transition: "0.3s",
                          }
                    }
                  />
                </IconButton> */}
              </CardActions>
              {/* <Collapse in={expand} timeout="auto" unmountOnExit> */}
              <CardContent>
                <Typography fontFamily="cursive" paragraph>
                  {post.body}
                </Typography>
              </CardContent>
              {/* </Collapse> */}
            </Card>
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
