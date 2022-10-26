import React, { useCallback } from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import FavoriteIcon from "@material-ui/icons/Favorite";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deletePost, updatePost } from "../../../redux/actions";
import CloseIcon from "@material-ui/icons/Close";

const Post = ({ post }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const onLikeBtnClick = useCallback(() => {
    dispatch(
      updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 })
    );
  }, [dispatch, post]);

  const onDeleteBtnClick = useCallback(() => {
    dispatch(deletePost.deletePostRequest({ ...post }));
  }, [dispatch, post]);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar>{post.author.slice(0, 1)}</Avatar>}
        title={post.author}
        subheader={moment(post.updatedAt).format("HH:MM MMM DD, YYYY")}
        action={
          <IconButton onClick={onDeleteBtnClick}>
            <CloseIcon />
          </IconButton>
        }
      />
      <CardMedia
        image={post.attachment}
        title={post.title}
        className={classes.media}
      />
      <Box
        display="flex"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <CardContent>
          <Typography variant="h5" color="textPrimary">
            {post.title}
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            {post.content}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            onClick={onLikeBtnClick}
            disableRipple
            style={{ padding: 0 }}
          >
            <FavoriteIcon color="secondary" />
          </IconButton>
          <Typography component="p" color="textSecondary">
            {post.likeCount}
            <span style={{ paddingLeft: "5px" }}>likes</span>
          </Typography>
        </CardActions>
      </Box>
    </Card>
  );
};

export default Post;
