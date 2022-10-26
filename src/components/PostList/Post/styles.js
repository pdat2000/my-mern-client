import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  media: {
    height: 190,
    borderRadius: 16,
    "&:hover": {
      cursor: "pointer",
    },
  },
  card: {
    borderRadius: 16,
    boxShadow:
      "4px 4px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
}));
