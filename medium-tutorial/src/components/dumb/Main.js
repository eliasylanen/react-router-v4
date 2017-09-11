import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home.js';
import Roster from './Roster.js';
import Schedule from './Schedule.js';

const Main = ({ login }) => (
  <Route
    path="/"
    children={() =>
      login ? (
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/roster" component={Roster} />
          <Route path="/schedule" component={Schedule} />
        </div>
      ) : (
        <h1>Please log in</h1>
      )}
  />
);

const mapStateToProps = ({ login }) => ({ login });

export default connect(mapStateToProps)(Main);
