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

const PORTFOLIO_PATH = '/';

const HomePageContent = ({ className }) => (
  <div className={className}>
    <h4>What am I up to?</h4>
    <ul>
      {UP_TO.map(({ url, text }) => (
        <li key={url}>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            {text}
          </a>
        </li>
      ))}
    </ul>
    <h4>Want to see what I&rsquo;ve built?</h4>
    <p>Check out my work on <a href={PORTFOLIO_PATH}>my portfolio</a>.</p>
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
);

HomePageContent.propTypes = {
  className: PropTypes.string,
};

const HomePage = () => (
  <Page
    head={{ title: 'Holman Gao' }}
    className={styles.container}
    showHeader={false}
    showFooter={false}
    >
    <header className={styles.header}>
      <h1 className={styles.heading}>
        Holman Gao
        <small className={styles.subHeading}>
          entrepreneur | freelance developer | in New York, NY
        </small>
      </h1>
    </header>
    <div className={styles.contentContainer}>
      <div className={styles.leftColumn}>
        &nbsp;
      </div>
      <div className={styles.rightColumn}>
        <HomePageContent className={styles.tabletContent} />
      </div>
    </div>
    <HomePageContent className={styles.mobileContent} />
    <footer className={styles.footer}>
      <nav>
        © {new Date().getFullYear()} Holman Gao
        {' '}| <a href='/'>Home</a>
        {' '}| <a href={PORTFOLIO_PATH}>Portfolio</a>
        {' '}| <a href='/resume'>Resume</a>
        {' '}| <a href='/blog'>Blog</a>
        {' '}|{' '}
        <a href='https://github.com/golmansax' target='_blank' rel='noopener noreferrer'>
          Github
        </a>
        {' '}|{' '}
        <a href='https://twitter.com/golmansax' target='_blank' rel='noopener noreferrer'>
          Twitter
        </a>
      </nav>
    </footer>
  </Page>
);

export default HomePage;
