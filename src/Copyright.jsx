import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Footer() {
  return (
      <AppBar position="static" color="primary" style = {{maxWidth: 240, margin: "auto"}}>
        <Container maxWidth = "false">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              &copy; 2020 Daniel Liu
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
  )
}