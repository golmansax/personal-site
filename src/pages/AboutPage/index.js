import React from 'react';
import { FormattedMessage } from 'react-intl';

import Page from '../../layouts/Page';
import portrait from './portrait_2017-01-27.jpg';
import AboutBlurb from './AboutBlurb';
import styles from './index.css';

const AboutPage = () => (
  <Page
    head={{
      title: 'About Me | Holman Gao',
      description: 'A little bit about Holman Gao, entrepreneur and freelance ' +
        'developer living in New York',
    }}
    className={styles.container}
    width='narrow'
    >
    <h2><FormattedMessage id='pages.about' /></h2>
    <div className={styles.contentContainer}>
      <div className={styles.leftColumn}>
        <img src={portrait} alt='' />
      </div>
      <AboutBlurb className={styles.rightColumn} />
    </div>
  </Page>
);

export default AboutPage;
