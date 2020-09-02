import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import { Grid, Box} from '@material-ui/core';
import projList from './constants/projConstants';
import pubList from './constants/pubConstants';
import MediaCard from './MediaCard';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    height: "300vh",
  }
}));

const Resume = () => {
  const classes = useStyles();
  const getCard = obj => {
    return (
      <Grid item xs={6} md={3}>
        <MediaCard {...obj} />
      </Grid>
    )
  };

  return (
    <div className={classes.root}>
      <Box p={4}>
        <Typography variant="h1" color="secondary" gutterBottom>
          Resume
        </Typography>
        <Box p={2} />
        <Typography variant="h4" gutterBottom>
          Yale University — Expected Grad. May 2023
        </Typography>
        <Typography variant="subtitle1" style = {{fontWeight: "bold"}}>
          Bachelor of Science — Computer Science and Mathematics
        </Typography>
        <Typography variant="subtitle1" style = {{fontWeight: "bold"}}>
          CS Coursework: &nbsp;
          <Typography variant="subtitle1" color = "primary" display = "inline">
          Data Structures and Programming Techniques; 
          Introductory Machine Learning; Computational Vision and Biological Perception; 
          Unsupervised Learning for Big Data.
        </Typography>
        </Typography>
        
        <Typography variant="subtitle1" style = {{fontWeight: "bold"}}>
          Math Coursework: &nbsp;
          <Typography variant="subtitle1" color = "primary" display = "inline">
          Multivariable Calculus and Linear Algebra; Probability Theory.
          </Typography>
        </Typography>
        <Box p={3}></Box>

        <Typography variant="h4" gutterBottom>
          Lexington High School — Class of 2019
        </Typography>
        <Typography variant="subtitle1" style = {{fontWeight: "bold"}}>
          Competitions and Awards: &nbsp;
          <Typography variant="subtitle1" color = "primary" display = "inline">
          USAJMO qualifier; 4x AIME qualifier; USACO Gold Division; 2x DOE National Science Bowl Champion. 
        </Typography>
        </Typography>

        <Box p={3}></Box>

        <Typography variant="h4" gutterBottom>
          Projects: 
          </Typography>
        <Grid container spacing={5}>
          {projList.map(projObj => getCard(projObj))}
        </Grid>

        <Box p={3}></Box>

        <Typography variant="h4" gutterBottom>
          Publications: 
        </Typography>
        <Grid container spacing={5}>
          {pubList.map(pubObj => getCard(pubObj))}
        </Grid>
      </Box>
    </div>
  );
};

export default Resume;