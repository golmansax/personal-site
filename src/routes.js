import React from 'react';
import { Route, IndexRoute } from 'react-router';

import './index.global.css';
import './highlight.global.css';

import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';

const routes = (
  <Route>
    <IndexRoute component={HomePage} />
    <Route path='resume' component={ResumePage} />
  </Route>
);

export default (
  <Route path='/'>
    {routes}
    <Route path='es'>
      {routes}
    </Route>
    <Route path='zh'>
      {routes}
    </Route>
  </Route>
);
