

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Typography from './Typography';



const styles = (theme) => ({
  root: {
    display: "flex",
    // backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
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
    height: 250,
    width:240 ,
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
          About Us
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
              <Typography variant="h4" align="center">
                  Richard
                </Typography>
                <Typography>
                <a href="https://www.linkedin.com/in/richardwhitehead253"> Linkedin </a>
                </Typography>
                <img
                  src={require('../Assets/richard.jpg')} 
                  alt="richard"
                  className={classes.image}
                />
                <Typography variant="h6" align="center">
                Hello, my name is Richard Whitehead and I’m a software developer in the Tacoma area. I’m a retired Army veteran and attended the CF 101 course and was very intrigued by the software development process, solving complex problems and decided I wanted to continue so here I am finishing up Python 401.
            
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
              <Typography variant="h4" align="center">
                  Lee-Roy
                </Typography>
                <Typography>
                <a href="https://www.linkedin.com/in/leeroy-king/"> Linkedin </a>
                </Typography>
                <img
                  src={require('../Assets/leo2.png')} 
                  alt="Lee-roy"
                  className={classes.image}
                />
                <Typography variant="h6" align="center" >
                Lee-Roy King works as a SRE at Oracle, when he isn't coding, yelling at developers or bouncing servers he enjoys the gym holy trinity (squat, bench, deadlift)
       
                </Typography>
              
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <Typography variant="h4" align="center">
                  Will
                  
                </Typography>
                <Typography >
                <a href="https://www.linkedin.com/in/william-koger-09714295/"> Linkedin </a>
                
                </Typography>
                <img
                  src={require('../Assets/will.png')} 
                  alt="clock"
                  className={classes.image}
                />
                <Typography variant="h6" align="center">
                Hi, my name is Will. I am a software engineer. I was in the military for 7 years as paratrooper. I gotten
                in to coding after taking a 101 class at Code Fellows. For the past 6 years I have worked in Supply chain at REI and evo. 
                I am currently a support engineer at evo.
                </Typography>
              </div>
            </Grid>
            
          </Grid>
        </div>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
              <Typography variant="h4" align="center">
                  Leo 
                </Typography>
                <Typography>
                <a href="https://www.linkedin.com/in/leo-kukharau/"> Linkedin </a>
                </Typography>
                <img
                  src= {require('../Assets/leo.jpg')} 
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                Python and JavaScript developer with a background in science, teaching, human services, and entrepreneurship. Passionate about using code to maximize efficiency while developing creative, customer-focused solutions.
          
                </Typography>
         
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <img
                  src= {require('../Assets/codefellows.png')} 
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h5" align="center" >
                  
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
              <Typography variant="h4" align="center">
                  Joe
                </Typography>
                <Typography>
                <a href="https://www.linkedin.com/in/joseph-lee-600599b9"> Linkedin </a>
                </Typography>
                <img
                  src={require('../Assets/joe2.jpeg')} 
                  alt="clock"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                Python developer and marine corps veteran of four years. Former truck driver with a passion in building software to improve trucking logistics.
                </Typography>
              </div>
            </Grid>
            
          </Grid>
        </div>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
