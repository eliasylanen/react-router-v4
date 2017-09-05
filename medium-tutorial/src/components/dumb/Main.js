import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home.js';
import Roster from './Roster.js';
import Schedule from './Schedule.js';

const Main = ({ jwt }) => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/roster" component={Roster} />
    <Route path="/schedule" component={Schedule} />
    <Route path="/login" component={Home} />
    {!jwt && <Redirect to="/login" />}
  </div>
);

const mapsStateToPops = ({ login }) => ({ jwt: login });

export default withRouter(connect(mapsStateToPops)(Main));
