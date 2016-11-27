import React from 'react';
import Page from '../../layouts/Page';

import portrait from './portrait.jpg';
import styles from './index.css';

const HomePage = () => (
  <Page head={{ title: 'Holman Gao' }}>
    <div className={styles.column}>
      <h1>Holman Gao</h1>
      <img src={portrait} className={styles.portrait} role='presentation' />
    </div>
    <div className={styles.column}>
      I am an entrepenuer and freelance developer with a love for education.
      Read my blog
      Check out my portfolio
      Tweet at me
      Want to work together?
    </div>
  </Page>
);

export default HomePage;
