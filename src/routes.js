import React from 'react';
import { Route, IndexRoute } from 'react-router';

import './index.global.css';
import './highlight.global.css';

import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';

export default (
  <Route path='/'>
    <IndexRoute component={HomePage} />
    <Route path='es' component={HomePage} />
    <Route path='resume' component={ResumePage} />
  </Route>
);
