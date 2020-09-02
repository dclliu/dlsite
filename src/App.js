import React from 'react';
import './App.css';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Box } from '@material-ui/core';
import Resume from './Resume';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ResponsiveDrawer from './ResponsiveDrawer.jsx';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TreeImg from './constants/test1.jpg';
import Copyright from './Copyright';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundImage: `url(${TreeImg})`,
    justifyContent: "center",
  },

  toolbar: {
    display: 'flex',
    ...theme.mixins.toolbar,
  } 
}));

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: "#263238",
      },
      secondary: {
        main: "#ad1457",
      },
    }
  }
);


function App() {  
  const classes = useStyles(theme);

  return (
    <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <div className={classes.root}>
        <ResponsiveDrawer />
        <main >
          <div className={classes.toolbar} />
          <Box m={8}></Box>
          
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/Resume">
              <Resume />
            </Route>
          </Switch>
          <Copyright />
        </main>
      </div >
    </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
