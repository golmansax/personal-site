import React from 'react';
import { Route, IndexRoute } from 'react-router';

import './index.global.css';
import './highlight.global.css';

import HomePage from './pages/HomePage';
import AppContainer from './AppContainer';

export default (
  <Route path='/' component={AppContainer}>
    <IndexRoute component={HomePage} />
  </Route>
);
