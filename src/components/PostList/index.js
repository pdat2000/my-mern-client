import React, { useEffect } from "react";
import { Box, CircularProgress, Grid } from "@material-ui/core";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { postsState$ } from "../../redux/selectors";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);
  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch, posts]);
  return (
    <React.Fragment>
      {posts.length > 0 ? (
        <Grid container spacing={2} alignItems="stretch">
          {posts.map((post) => (
            <Grid item xs={12} md={4} sm={6} key={post._id}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </React.Fragment>
  );
};

export default PostList;
