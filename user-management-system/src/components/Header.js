import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    border: "2px solid white",
    borderRadius: "10px !important",
  },
  title: {
    flexGrow: 1,
    display: "none",
    marginRight: "10rem",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  appBar: {
    backgroundColor: "rgb(44, 37, 92)",
  },
}));

export default function Header() {
  const history = useHistory();
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
            onClick={() => history.push("/add")}
          >
            <b>Create User</b>
          </IconButton>
          <Typography className={classes.title} variant='h6' noWrap>
            User Management
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
