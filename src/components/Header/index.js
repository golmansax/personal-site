import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { getIntlPath } from '../../utils/intl';

import styles from './index.css';
import logo from './logo.png';

const Header = ({ intl }) => (
  <header className={styles.header}>
    <h1 className={styles.heading}>
      <a href={getIntlPath({ locale: intl.locale, path: '/' })} className={styles.link}>
        <div className={styles.wordmark}>
          <img src={logo} alt='' className={styles.logo} />
          <FormattedMessage id='header.name' />
        </div>
        <div>
          <span className={styles.subHeading}>
            <FormattedMessage id='header.tagline' />
          </span>
        </div>
      </a>
    </h1>
  </header>
);

Header.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Header);
