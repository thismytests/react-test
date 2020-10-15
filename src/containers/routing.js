import React from 'react' ;
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

// routes
import {routes} from './config';

// containers
import {Artists} from './Artist';
import {Event} from './Event';

export default () => {
  // todo... Nick Litvin... must be default router
  return (
    <Router>
      <Route path={routes.artists} exact  component={Artists}/>
      <Route path={routes.events} exact  component={Event}/>

      {/*not found page*/}
      <Redirect to={routes.artists}/>
    </Router>
  );
};
