import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Fade from '@material-ui/core/Fade';
import { useEffect } from "react";

const useStyles = makeStyles(() => ({
  root: {
    height: "300vh",
  }
}));



const Home = () => {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  useEffect(() => {
    handleChange();
  }, []);


  return (

    <Box p={10}>
      <div className={classes.root}>

        <Grid container spacing={0} >


          <Grid item xs={1}></Grid>
          <Grid item xs={10}>

            <Fade in={checked} timeout={4000}>
              <Typography variant="h1" color="secondary" align="center" gutterBottom >
                Welcome!
            </Typography>
            </Fade>

            <Box p={8}></Box>

            <Typography variant="h5" align="center" display="inline">
              Hi! My name is Daniel and I'm a sophomore at Yale, majoring in&nbsp;
              <Link target="_blank" rel="noopener" color="secondary" href="http://catalog.yale.edu/ycps/subjects-of-instruction/computer-science-mathematics/" >
                math and computer science
              </Link>
              . I'm currently taking classes from my home in Boston.
            </Typography>
            <Box p={1}></Box>
            <Typography variant="h5" align="center" display="inline">
              Thanks for visiting my website — feel free to explore the other pages to
              learn more about&nbsp;
              <Link color="secondary" href="/About" >
                me
              </Link>
              &nbsp;and&nbsp;
              <Link color="secondary" href="/Resume" >
                my past projects
              </Link>
               !
            </Typography>
          </Grid>
          <Grid item xs={1}></Grid>


        </Grid>
      </div>
    </Box>
  );
};

export default Home;