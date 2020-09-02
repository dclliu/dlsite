import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import MediaCard from './MediaCard';
import langList from './constants/langConstants';
import funList from './constants/funConstants';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "300vh",
  },
  paper: {
    padding: 10,
  }
}));

const Home = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const getCard = obj => {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <MediaCard {...obj} />
      </Grid>
    )
  };

  return (
    <div className={classes.root}>
      <Box p={4}>
        <Typography variant="h1" color="secondary" gutterBottom>
          About
        </Typography>
        <Box p={3} />
        <Typography variant="h5" gutterBottom>
          I'm interested in computer science-y things and I come from a strong mathematical
          background (both research and competitions), hence my computer science and mathematics
          major :)
        </Typography>
        <Box p={2} />
        <Typography variant="h5" gutterBottom>
          Right now, I'm particularly interested in software development roles, and I also enjoy
          data analysis/machine learning research.
        </Typography>
        
        <Box p={5}></Box>
        
        <Typography variant="h4" gutterBottom> Languages: </Typography>
        <Grid container spacing={5}>
          {langList.map(langObj => getCard(langObj))}
        </Grid>

        <Box p={3}></Box>
        <Typography variant="h4" gutterBottom > Other interests: </Typography>
        <Grid container spacing={5}>
          {funList.map(funObj => getCard(funObj))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;