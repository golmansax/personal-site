import React, { PropTypes } from 'react';
import Page from '../../layouts/Page';

import styles from './index.css';

const UP_TO = [
  {
    text: 'BoostMySchool',
    url: 'https://www.boostmyschool.com',
  },
  {
    text: 'Thum.io',
    url: 'https://www.thum.io',
  },
  {
    text: 'BookBooster',
    url: 'https://bayarea.bookbooster.org',
  },
];

const HomePageHeader = ({ className }) => (
  <div className={className}>
    <h1>Holman Gao</h1>
    <div>entrepreneur | freelance developer</div>
  </div>
);

HomePageHeader.propTypes = {
  className: PropTypes.string,
};

const HomePage = () => (
  <Page head={{ title: 'Holman Gao' }} className={styles.container} showHeader={false}>
    <HomePageHeader className={styles.phoneHeader} />
    <div className={styles.contentContainer}>
      <div className={styles.leftColumn}>
        &nbsp;
      </div>
      <div className={styles.rightColumn}>
        <HomePageHeader className={styles.tabletHeader} />
        <h4>What am I up to?</h4>
        <ul>
          {UP_TO.map(({ url, text }) => (
            <li key={url}>
              <a href={url} target='_blank' rel='noopener noreferrer'>
                {text}
              </a>
            </li>
          ))}
          <li>Living in New York, NY</li>
        </ul>
        <h4>Want to see what I&rsquo;ve built?</h4>
        <p>Check out my work on <a href='/portfolio'>my portfolio</a>.</p>
        <h4>
          Interested in working together (freelancing or co-founder)? Just want to say hello?
        </h4>
        <p>
          Reach out via <a href='mailto:holman@golmansax.com'>email</a>{' '}
          or <a href='https://twitter.com/golmansax' target='_blank' rel='noopener noreferrer'>
            Twitter
          </a>. I read every message, I promise!
        </p>
      </div>
    </div>
  </Page>
);

export default HomePage;
