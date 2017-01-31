import React from 'react';

import styles from './index.css';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.heading}>
      Holman Gao
      <small className={styles.subHeading}>
        entrepreneur |{' '}
        freelance developer |{' '}
        <span className={styles.chunk}>in New York, NY</span>
      </small>
    </h1>
  </header>
);

export default Header;
