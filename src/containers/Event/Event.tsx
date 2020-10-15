import React, {useEffect} from 'react';

// redux
import {useDispatch} from 'react-redux'

// @material-ui
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import {Checkbox} from "@material-ui/core";

// api
import ArtistsApiService from '../../commons/api/ArtistsApi';
import {Event} from "../../commons/api/types";

// store
import {
  AddFavouriteEvent,
  RemoveFavouriteEvent
} from '../../commons/store/events';

// navigation
import {getArtistUrlValue} from './navigation';

// styles
import {useStyles} from './Event.styles';

export default function Artist(props: any) {
// hooks
  const classes = useStyles();
  const dispatch = useDispatch();

  // state
  const [state, setState] = React.useState({
    checkedA: false,
  });
  const [event, setEvent] = React.useState<Event>();

  // subscribers
  let subs1: any;


  useEffect(() => {
    makeApiRequest();
  }, [props.history.location]);

  const makeApiRequest = () => {
    const pathName = props.history.location.pathname;
    const event = pathName.split('/').slice(-2);

    const artist = event[0];
    const eventId = event[1];

    if (event) {
      // @ts-ignore
      subs1 = ArtistsApiService.getArtistEventById(artist, eventId)
        .subscribe((data: any) => {
          setEvent(data)
          // @ts-ignore
        }, (err) => {
          console.log('err is here ', err);
        })
    }
    return () => subs1 && subs1.unsubscribe()
  };

  const navigationArtist = () => {
    const event = props.history.location.pathname.split('/').slice(-2);
    const artist = event[0];
    props.history.push(getArtistUrlValue(artist));
  };


  const handleFormsChanges = (name: string, event: any) => (domEvent: any) => {
    setState({...state, [name]: domEvent.target.checked});

    console.log(' ', domEvent);
    addRemoveFavouriteEventToStore(domEvent.target.checked,
      event,
      dispatch)
  };

  // todo ... will be discussed
  const addRemoveFavouriteEventToStore = (
    isChecked: boolean,
    event: Event,
    dispatch: Function
  ) => {
    // todo ... will be discussed
    if (isChecked) {
      dispatch(AddFavouriteEvent(event))
    } else {
      dispatch(RemoveFavouriteEvent(event))
    }
  };

  return (
    <div className={classes.root}>

      {/*title*/}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
          <div onClick={navigationArtist}>GO Artist</div>
        </Grid>

        <Grid item xs={12} sm={9}>
          Who is in town
        </Grid>
        <Grid item xs={12} sm={3}>
          <Checkbox
            checked={state.checkedA}
            onChange={handleFormsChanges('checkedA', event)}
            value="checkedA"
            inputProps={{
              'aria-label': 'primary checkbox',
            }}
          />
        </Grid>
      </Grid>

      {/*event meta data*/}
      {
        event && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {event.description}
              </Paper>
            </Grid>
          </Grid>
        )
      }


      {/*special offers*/}
      {
        event && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                special offers
              </Paper>
            </Grid>
          </Grid>
        )
      }

    </div>
  );
}
