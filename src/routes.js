import React from 'react';
import { Route, IndexRoute } from 'react-router';

import './index.global.css';
import './highlight.global.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
// import ResumePage from './pages/ResumePage';
import GivingPage from './pages/GivingPage';
import ContactPage from './pages/ContactPage';

export default (
  <Route path='/'>
    <IndexRoute component={HomePage} />
    <Route path='es'>
      <IndexRoute component={HomePage} />
      <Route path='about-me' component={AboutPage} />
      <Route path='contact' component={ContactPage} />
    </Route>
    <Route path='zh'>
      <IndexRoute component={HomePage} />
      <Route path='about-me' component={AboutPage} />
      <Route path='contact' component={ContactPage} />
    </Route>
    <Route path='about-me' component={AboutPage} />
    <Route path='contact' component={ContactPage} />
    {/* <Route path='resume' component={ResumePage} /> */}
    <Route path='giving' component={GivingPage} />
  </Route>
);
