import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Senators from './views/Senators';
import Representatives from './views/Representatives';
import StateRepresentatives from './components/StateRepresentatives';
// import StateSenators from './components/StateSenators';

export default (
  <Switch>
    <Route path="/representatives" exact component={Representatives} />
    <Route path="/senators" exact component={Senators} />
    <Route path="/representatives/:state" component={StateRepresentatives} />
    {/* <Route path="/senators/:state" component={StateSenators} /> */}
  </Switch>
);
