import React, { useCallback, useState } from "react";
import {
  Modal,
  TextareaAutosize,
  TextField,
  Button,
  Typography,
  IconButton,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { modalState$ } from "../../redux/selectors";
import useStyles from "./styles";
import { createPost, hideModal } from "../../redux/actions";
import CloseIcon from "@material-ui/icons/Close";

const CreatePostModal = () => {
  const [data, setData] = useState({
    title: "",
    content: "",
    attachment: "",
  });
  const classes = useStyles();
  const { isShow } = useSelector(modalState$);
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    dispatch(hideModal());
    setData({
      title: "",
      content: "",
      attachment: "",
    });
  }, [dispatch]);

  const onSubmit = useCallback(() => {
    dispatch(createPost.createPostRequest(data));
    setData({
      title: "",
      content: "",
      attachment: "",
    });
    dispatch(hideModal());
  }, [data, dispatch]);

  const body = (
    <div className={classes.paper} id="simple-modal-title">
      <Typography component="h5" variant="h5">
        Create New Post
      </Typography>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="Title"
          value={data.title}
          onChange={(e) => {
            setData({ ...data, title: e.target.value });
          }}
        />
        <TextareaAutosize
          className={classes.textarea}
          minRows={5}
          maxRows={5}
          placeholder="Content..."
          value={data.content}
          onChange={(e) => {
            setData({ ...data, content: e.target.value });
          }}
        />
        <TextField
          className={classes.title}
          label="Image"
          value={data.attachment}
          onChange={(e) => {
            setData({ ...data, attachment: e.target.value });
          }}
        />

        <div className={classes.footer}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={onSubmit}
          >
            Creater
          </Button>
        </div>
      </form>
      <IconButton className={classes.close} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </div>
  );
  return (
    <React.Fragment>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </React.Fragment>
  );
};

export default CreatePostModal;
