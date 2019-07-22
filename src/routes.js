import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Senators from './views/Senators';
import Representatives from './components/Representatives';

export default (
  <Switch>
    <Route path="/representatives" component={Representatives} />
    <Route path="/senators" component={Senators} />
  </Switch>
);
