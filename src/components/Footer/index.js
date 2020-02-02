import React, { PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import Credits from './Credits';
import { getPathWithoutIntl, getIntlPath } from '../../utils/intl';

import styles from './index.css';

const PATHS_WITH_LOCALE = new Set([
  '/', '/about-me', '/about-me/', '/contact', '/contact/',
]);

const Footer = ({ intl, currentPath }) => {
  const { locale } = intl;

  const pathWithoutIntl = getPathWithoutIntl(currentPath);
  const intlPath = PATHS_WITH_LOCALE.has(pathWithoutIntl) ? pathWithoutIntl : '/';

  return (
    <footer className={styles.footer}>
      <nav className={styles.section}>
        <FormattedMessage id='footer.languages' />{' '}
        <a href={getIntlPath({ locale: 'en', path: intlPath })}>English</a> &bull;{' '}
        <a href={getIntlPath({ locale: 'zh', path: intlPath })}>中文</a> &bull;{' '}
        <a href={getIntlPath({ locale: 'es', path: intlPath })}>Español</a>
      </nav>
      <nav className={styles.section}>
        © {new Date().getFullYear()} Holman Gao
        {' '}&bull; <a href={getIntlPath({ locale, path: '/' })}>
          <FormattedMessage id='footer.home' />
        </a>
        {' '}&bull; <a href={getIntlPath({ locale, path: '/about-me' })}>
          <FormattedMessage id='pages.about' />
        </a>
        {' '}&bull; <a href='/portfolio'><FormattedMessage id='pages.portfolio' /></a>
        {' '}&bull; <a href='/giving'><FormattedMessage id='pages.giving' /></a>
        {' '}&bull; <a href='/resume'><FormattedMessage id='pages.resume' /></a>
        {' '}&bull; <a href='/blog'><FormattedMessage id='footer.blog' /></a>
        {' '}&bull;{' '}
        <a href='https://github.com/golmansax' target='_blank' rel='noopener noreferrer'>
          GitHub
        </a>
        {' '}&bull;{' '}
        <a href='https://www.linkedin.com/in/holman-gao/' target='_blank' rel='noopener noreferrer'>
          LinkedIn
        </a>
        {' '}&bull;{' '}
        <a href='https://twitter.com/golmansax' target='_blank' rel='noopener noreferrer'>
          <FormattedMessage id='contact.twitter' />
        </a>
        {' '}&bull; <a href={getIntlPath({ locale, path: '/contact' })}>
          <FormattedMessage id='pages.contact' />
        </a>
      </nav>
      <div className={styles.credits}>
        <Credits />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  intl: intlShape.isRequired,
  currentPath: PropTypes.string.isRequired,
};

export default injectIntl(Footer);
