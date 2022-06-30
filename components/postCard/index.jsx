import React, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";
import { style } from "@mui/system";

function PostCard({ post }) {
  const [expand, setExpand] = useState(false);

  const router = useRouter();

  const handleClickExpand = (e) => {
    e.stopPropagation();
    setExpand(!expand);
  };

  const handleRouterForPost = (e) => {
    if (typeof window !== "undefined" && window.location.pathname == "/") {
      router.push(`/posts/${post.id}`);
    }
  };

  return (
    <Box
      minHeight="200px"
      sx={{ cursor: "pointer" }}
      onClick={handleRouterForPost}
    >
      <Card
        sx={{
          // ...(expand ? { height: "100%" } : null),
          maxWidth: 445,
          minHeight: 200,
          boxShadow: "2px 2px 3px #acacad",
          ":hover": {
            boxShadow: "8px 5px 5px #acacad",
          },
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#0e345e" }} aria-label="recipe">
              {post.id}
            </Avatar>
          }
          sx={{
            "& .MuiCardHeader-avatar": {
              alignSelf: "flex-start",
            },
            minHeight: "144px",
            alignItems: "baseline",
          }}
          title={
            <Typography style={{ fontWeight: "bold" }}>{post.title}</Typography>
          }
          subheader="September 14, 2016"
        />
        <CardActions sx={{ justifyContent: "end" }} disableSpacing>
          <IconButton aria-label="expand" onClick={handleClickExpand}>
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
  );
}

export default PostCard;
