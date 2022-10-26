import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  paper: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "8px",
    [theme.breakpoints.only("xs")]: {
      width: 324,
      height: 400,
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    margin: "0 0 10px 0",
  },
  title: {
    marginBottom: "10px",
  },
  textarea: {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    resize: "none",
  },
  footer: {
    marginTop: "10px",
  },
  close: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "black",
  },
}));
