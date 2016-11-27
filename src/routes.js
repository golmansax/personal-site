import React from 'react';
import { Route, IndexRoute } from 'react-router';

import './index.global.css';
import './highlight.global.css';

import HomePage from './pages/HomePage';

export default (
  <Route path='/'>
    <IndexRoute component={HomePage} />
  </Route>
);
