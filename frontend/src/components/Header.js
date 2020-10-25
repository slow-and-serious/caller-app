import {
  AppBar,
  Button,
  CssBaseline,
  Link,
  Toolbar,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { NavLink } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link
              component={NavLink}
              to="/"
              underline="none"
              color="textPrimary"
            >
              Pat shop
            </Link>
          </Typography>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            component={NavLink}
            to="/login"
          >
            Login
          </Button>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
            component={NavLink}
            to="/logout"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
