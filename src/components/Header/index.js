import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './index.css';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.heading}>
      <a href='/' className={styles.link}>
        <FormattedMessage id='header.name' />
        <small className={styles.subHeading}>
          <FormattedMessage id='header.job1' /> |{' '}
          <FormattedMessage id='header.job2' /> |{' '}
          <span className={styles.chunk}><FormattedMessage id='header.location' /></span>
        </small>
      </a>
    </h1>
  </header>
);

export default Header;
