import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Page from '../../layouts/Page';

import styles from './index.css';

const UP_TO = [
  {
    text: 'BoostMySchool',
    url: 'https://www.boostmyschool.com',
    slug: 'boostMySchool',
  },
  {
    text: 'Thum.io',
    url: 'https://www.thum.io',
    slug: 'thumIo',
  },
  {
    text: 'BookBooster',
    url: 'https://bayarea.bookbooster.org',
    slug: 'bookBooster',
  },
];

const PORTFOLIO_PATH = '/';

const HomePageContent = ({ className }) => (
  <div className={className}>
    <div className={styles.contentSection}>
      <h4 className={styles.contentSectionHeading}>Currently working on...</h4>
      <div>
        {UP_TO.map(({ slug, url, text }) => (
          <div key={url}>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className={classnames([styles.upToLink, styles[slug]])}
              >
              {text}
            </a>
          </div>
        ))}
      </div>
    </div>
    <div className={styles.contentSection}>
      <h4 className={styles.contentSectionHeading}>Want to see what I&rsquo;ve built?</h4>
      <div>Check out my work on <a href={PORTFOLIO_PATH}>my portfolio</a>.</div>
    </div>
    <div className={styles.contentSection}>
      <h4 className={styles.contentSectionHeading}>Contact</h4>
      <div>
        Reach out via <a href='mailto:holman@golmansax.com'>email</a>{' '}
        or <a href='https://twitter.com/golmansax' target='_blank' rel='noopener noreferrer'>
          Twitter
        </a>. I read every message, I promise!
      </div>
    </div>
  </div>
);

HomePageContent.propTypes = {
  className: PropTypes.string,
};

const HomePage = () => (
  <Page
    head={{
      title: 'Holman Gao – entrepreneur | developer | in New York',
      description: 'Personal site of Holman Gao, entrepreneur and freelance developer ' +
        'with a love for education. University of Maryland and Blair Magnet alum.',
    }}
    >
    <div className={styles.contentContainer}>
      <div className={styles.leftColumn}>
        &nbsp;
      </div>
      <div className={styles.rightColumn}>
        <HomePageContent className={styles.tabletContent} />
      </div>
    </div>
    <HomePageContent className={styles.mobileContent} />
  </Page>
);

export default HomePage;
