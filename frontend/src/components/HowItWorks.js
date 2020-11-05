import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "./Button";
import Typography from "./Typography";

const styles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    overflow: "hidden",
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>

                <Typography variant="h5" align="center">
                  To recieve calls for open shifts set up account with
                  designated account manager at your company. After you have
                  been set up in your companies system you will recieve calls
                  based off of your companies filtering process.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>

                <Typography variant="h5" align="center">
                  Once you recieve a call you will be asked by our automated
                  sytem if you would like to pick up the current open shift. If
                  you would like the open shift then press 1 on your dial pad
                  for 'Yes'. If you are unable to accept the open shift then
                  press 2 on your dial pad for 'No'.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>

                <Typography variant="h5" align="center">
                  Once you accept the shift your information will be sent to
                  your Manager and you will be notified by them to wether or not
                  you have the shift. If you need to change your information at
                  any point please press the Login button and you will be bought
                  to your profile page.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        {props.loggedIn ? null : (
          <Button
            color="secondary"
            size="large"
            variant="contained"
            className={classes.button}
            component="a"
            href="/login"
          >
            Login
          </Button>
        )}
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
