import React from 'react';
import { FormattedMessage } from 'react-intl';

import Page from '../../layouts/Page';
import styles from './index.css';
import portrait from './portrait_2017-01-27.jpg';

const ACROYOGA_LINK = 'http://www.sfgate.com/music/slideshow/' +
  'Outside-Lands-2014-91325.php';

const AboutPage = () => (
  <Page
    head={{
      title: 'About Me | Holman Gao',
      description: 'Up-to-date curriculum vitae/resume. Includes work, education, ' +
        'side projects, volunteering, hobbies.',
    }}
    className={styles.container}
    >
    <h2><FormattedMessage id='pages.about' /></h2>
    <div className={styles.contentContainer}>
      <div className={styles.leftColumn}>
        <img src={portrait} />
      </div>
      <div className={styles.rightColumn}>
        Hi! My name is Holman, I am an entrepreneur and freelance developer
        with a love for education.  I speak English and Mandarin natively,
        and Spanish at an intermediate level. In my free time, I like to sing
        and play guitar, tutor math, and sometimes even{' '}
        <a
          href={ACROYOGA_LINK}
          target='_blank'
          rel='noopener noreferrer'
          >
          do acroyoga
        </a>.
      </div>
    </div>
  </Page>
);

export default AboutPage;
