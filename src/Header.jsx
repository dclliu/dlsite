import React from 'react';
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  typographyStyles: {
    flex: 1
  }
}));


const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>

        <Typography className={classes.typographyStyles} variant="h4">
          Daniel Liu
        </Typography>
        <IconButton>
          <GitHubIcon />
        </IconButton>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
        <IconButton>
          <Brightness4Icon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
