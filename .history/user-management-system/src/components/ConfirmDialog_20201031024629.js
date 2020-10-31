import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  makeStyles,
  IconButton,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/usersSlice";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogAction: {
    justifyContent: "center",
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      cursor: "default",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "8rem",
    },
  },
}));

export default function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialog } = props;
  const users = useSelector(state => state.users)
  const onDelete = () => {
    dispatch(removeUser(confirmDialog.recordToDelete));
    dispatch(copyUsers(users));
    setConfirmDialog({ ...confirmDialog, isOpen: false });
  };
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogTitle}>
        <IconButton disableRipple className={classes.titleIcon}>
          <NotListedLocationIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant='h6'>{confirmDialog.title}</Typography>
        <Typography variant='subtitle2'>{confirmDialog.subtitle}</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <Button
          style={{ padding: "15px" }}
          color='primary'
          onClick={() => setConfirmDialog({ ...confirmDialog, isOpen: false })}
        >
          No
        </Button>
        <Button
          style={{ padding: "15px" }}
          text='Yes'
          color='secondary'
          onClick={() => onDelete()}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
