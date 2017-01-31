import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './index.css';

const PORTFOLIO_PATH = '/';

const Footer = () => (
  <footer className={styles.footer}>
    <nav>
      © {new Date().getFullYear()} Holman Gao
      {' '}&bull; <a href='/'><FormattedMessage id='footer.home' /></a>
      {' '}&bull; <a href={PORTFOLIO_PATH}><FormattedMessage id='footer.portfolio' /></a>
      {' '}&bull; <a href='/resume'><FormattedMessage id='resume.resume' /></a>
      {' '}&bull; <a href='/blog'><FormattedMessage id='footer.blog' /></a>
      {' '}&bull;{' '}
      <a href='https://github.com/golmansax' target='_blank' rel='noopener noreferrer'>
        Github
      </a>
      {' '}&bull;{' '}
      <a href='https://twitter.com/golmansax' target='_blank' rel='noopener noreferrer'>
        <FormattedMessage id='contact.twitter' />
      </a>
    </nav>
    <nav>
      <FormattedMessage id='footer.languages' />{' '}
      <a href='/'><FormattedMessage id='footer.en' /></a> &bull;{' '}
      <a href='/zh'><FormattedMessage id='footer.zh' /></a> &bull;{' '}
      <a href='/es'><FormattedMessage id='footer.es' /></a>
    </nav>
  </footer>
);

export default Footer;
