import React from 'react';

// @material-ui
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {CardMedia} from '@material-ui/core';

import {IArtistDescription} from "./types";

// styles
import {useStyles} from './ArtistDescription.styles';

function ArtistDescription(props: IArtistDescription) {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
        <Paper className={classes.paper}>
          <CardMedia
            className={classes.media}
            image={props.imageUrl}
            title="Contemplative Reptile"/>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Paper className={classes.paper}>
            {props.imageUrl}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default ArtistDescription;
