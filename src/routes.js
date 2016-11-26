import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomePage from './pages/HomePage';
import AppContainer from './AppContainer';

import './index.global.css';
import './highlight.global.css';

export default (
  <Route path='/' component={AppContainer}>
    <IndexRoute component={HomePage} />
  </Route>
);
