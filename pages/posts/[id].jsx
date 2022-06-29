import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../constants/baseUrl";
import {
  Card,
  CardHeader,
  Typography,
  CardActions,
  CardContent,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";

function Post({ post }) {
  const [expand, setExpand] = useState(false);

  const handleClickExpand = () => {
    setExpand(!expand);
  };

  return (
    <Box
      sx={{ width: "inherit", height: "inherit" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="445px" height="345px">
        <Card
          sx={{
            maxWidth: 445,
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
            <IconButton onClick={handleClickExpand}>
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
            </IconButton>
          </CardActions>
          <Collapse in={expand} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography fontFamily="cursive" paragraph>
                {post.body}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
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
