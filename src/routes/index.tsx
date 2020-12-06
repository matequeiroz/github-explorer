import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/home';
import Repository from '../pages/Repository/repository';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/repository/:name+" component={Repository} />
  </Switch>
);

export default Routes;
