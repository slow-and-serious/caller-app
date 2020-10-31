import {
  AppBar,
  Button,
  CssBaseline,
  Link,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
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
  // navbarDisplayFlex: {
  //   display: `flex`,
  //   justifyContent: `space-between`
  // },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
}));

function LoginLogout(props) {
  const classes = props.classes;
  const loggedIn = props.loggedIn;
  return loggedIn ? (
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
  ) : (
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
  );
}

function checkSessionIfNoLoggedIn(setLoggedIn) {
  const refreshToken = sessionStorage.getItem("refresh_token");
  if (refreshToken) {
    const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));
    // exp date in token is expressed in seconds, while now() returns milliseconds:
    const now = Math.ceil(Date.now() / 1000);
    console.log(refreshToken);

    if (tokenParts.exp > now) {
      setLoggedIn(true);
    }
  }
}

function Header(props) {
  const classes = useStyles();
  useEffect(() => {
    if (!props.loggedIn) {
      checkSessionIfNoLoggedIn(props.setLoggedIn);
    }
  });
  const navLinks = [
    {
      title: `Notification History`,
      path: `/notification-history`,
      viewableByManager: "False", // This doesn't need to be "false" it can be anything besides "True"
    },
    { title: `Rotation History`, path: `/rotation`, viewableByManager: "True" },
    { title: `Start Rotation`, path: `/start-rotation`, viewableByManager: "True" },
  ];

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
              Caller App
            </Link>
          </Typography>

          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {props.loggedIn
              ? navLinks.map(({ title, path, viewableByManager }) =>
                  viewableByManager === "all" ||
                  viewableByManager === props.profile.is_manager ? (
                    <Link
                      component={NavLink}
                      to={path}
                      underline="none"
                      key={title}
                      className={classes.linkText}
                    >
                      <ListItem button>
                        <ListItemText primary={title} />
                      </ListItem>
                    </Link>
                  ) : null
                )
              : null}
          </List>
          <LoginLogout classes={classes} loggedIn={props.loggedIn} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
