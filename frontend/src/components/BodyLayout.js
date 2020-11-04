import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
    position: "relative",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      height: "80vh",
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
  },
  backdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.2,
    zIndex: -1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -2,
  },

  color: {
    position: "absolute",
    left: "50%",
    top: "15%",
    marginTop: "64px",
    transform: "translate(-50%, -50%)",
    color: "black",
    backgroundColor: "rgba(255,255,255,.7)",
    width: "fit-content",
    // opacity: 0.5,
  },
});

function BodyLayout(props) {
  const { backgroundClassName, children, classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {children}
        <div className={classes.backdrop} />
        <div className={clsx(classes.background, backgroundClassName)} />
      </Container>
      <Container className={classes.color}>
        <typography>
          <h3>
            Welcome to the Caller App an easy solution to notify your employees
          </h3>
          <h3>
            of open shifts by seniority level. For info on how this works scroll
            down{" "}
          </h3>
          <h3>to the how it works section.</h3>
        </typography>
      </Container>
    </section>
  );
}

BodyLayout.propTypes = {
  backgroundClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BodyLayout);
