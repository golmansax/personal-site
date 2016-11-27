import React from 'react';
import Page from '../../layouts/Page';

import portrait from './portrait.jpg';
import styles from './index.css';

const HomePage = () => (
  <Page head={{ title: 'Holman Gao' }} className={styles.container}>
    <div className={styles.leftColumn}>
      <h1>Holman Gao</h1>
      <h3>entrepreneur | freelance developer</h3>
      <img src={portrait} className={styles.portrait} role='presentation' />
    </div>
    <div className={styles.rightColumn}>
      <h4>What am I up to?</h4>
      <ul>
        <li>BoostMySchool</li>
        <li>BookBooster</li>
        <li>Thum.io</li>
      </ul>
      <h4>Want to see what I built?</h4>
      <p>Check out my portfolio</p>
      <h4>Interested in hearing my thoughts?</h4>
      <p>Read my blog; follow me on Twitter</p>
      <h4>Interested in working together? Just want to say hello?</h4>
      <p>Reach out via <a href='mailto:holman@golmansax.com'>email</a> or Twitter</p>
    </div>
  </Page>
);

export default HomePage;
