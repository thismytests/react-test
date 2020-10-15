import React, {useContext} from 'react';

import {
  Link, match,
  withRouter
} from 'react-router-dom';

import {Event as EventType} from 'commons/api/types';

// @material-ui
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// context
import NavigationContext from '../../../navigation';

// styles
import {useStyles} from './Event.styles';

const getArtistFromUrl = (matchProps: match) => {
  const params = matchProps.params as { artist: string };
  return params.artist;
};

// todo ... will be t`ypes here
function Event({item, ...restProps}: {
  item: EventType,
  match: any
}) {
  // hooks
  const classes = useStyles();
  const context = useContext(NavigationContext);

  return (

    <Grid item xs={12}>
      <Link to={context.getArtistUrlValue(getArtistFromUrl(restProps.match), item.id)}>
        <Paper className={classes.paper}>{item.venue.country}  {item.venue.city}</Paper>
      </Link>
    </Grid>
  );
}

// @ts-ignore
export default withRouter(Event);
