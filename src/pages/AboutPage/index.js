import React from 'react';
import { FormattedMessage } from 'react-intl';

import Page from '../../layouts/Page';
import AboutBlurb from './AboutBlurb';
import AboutImage from './AboutImage';
import styles from './index.css';

const AboutPage = () => (
  <Page
    head={{
      title: 'About Me | Holman Gao',
      description: 'A little bit about Holman, software engineer turned CEO & founder ' +
        'living in New York',
    }}
    className={styles.container}
    width='narrow'
    >
    <h2><FormattedMessage id='pages.about' /></h2>
    <div className={styles.contentContainer}>
      <div className={styles.leftColumn}>
        <AboutImage />
      </div>
      <AboutBlurb className={styles.rightColumn} />
    </div>
  </Page>
);

export default AboutPage;
