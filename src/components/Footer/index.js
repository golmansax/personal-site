import React from 'react';
import { FormattedMessage } from 'react-intl';
import Credits from './Credits';

import styles from './index.css';

const Footer = () => (
  <footer className={styles.footer}>
    <nav className={styles.section}>
      <FormattedMessage id='footer.languages' />{' '}
      <a href='/'>English</a> &bull;{' '}
      <a href='/zh'>中文</a> &bull;{' '}
      <a href='/es'>Español</a>
    </nav>
    <nav className={styles.section}>
      © {new Date().getFullYear()} Holman Gao
      {' '}&bull; <a href='/'><FormattedMessage id='footer.home' /></a>
      {' '}&bull; <a href='/about-me'><FormattedMessage id='pages.about' /></a>
      {' '}&bull; <a href='/portfolio'><FormattedMessage id='pages.portfolio' /></a>
      {' '}&bull; <a href='/resume'><FormattedMessage id='pages.resume' /></a>
      {' '}&bull; <a href='/blog'><FormattedMessage id='footer.blog' /></a>
      {' '}&bull;{' '}
      <a href='https://github.com/golmansax' target='_blank' rel='noopener noreferrer'>
        GitHub
      </a>
      {' '}&bull;{' '}
      <a href='https://twitter.com/golmansax' target='_blank' rel='noopener noreferrer'>
        <FormattedMessage id='contact.twitter' />
      </a>
    </nav>
    <div className={styles.credits}>
      <Credits />
    </div>
  </footer>
);

export default Footer;
