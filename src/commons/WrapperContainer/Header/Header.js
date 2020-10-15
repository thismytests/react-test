import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// logo
import logo from '../../../logo.svg';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    cursor: 'pointer',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} className={classes.logo} alt="logo" />
          <Typography variant="h6" className={classes.title}>
            Bizzabo test by Nick Lytvyn
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
