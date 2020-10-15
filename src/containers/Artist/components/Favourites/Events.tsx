import React from 'react';

// @material-ui
import Grid from '@material-ui/core/Grid';

// components
import Event from './Event';

// types
import {Event as EventApiType} from '../../../../commons/api/types';

function Events({events}: {
  events: Array<EventApiType>
}) {

  const createItemsTemplate = () => {
    return events.map((item, i) => {
      return <Event item={item} key={i}/>
    })
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {createItemsTemplate()}
      </Grid>

    </React.Fragment>
  );
}

export default Events;
