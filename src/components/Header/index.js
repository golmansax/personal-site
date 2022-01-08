import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { getIntlPath } from '../../utils/intl';

import styles from './index.css';

const Header = ({ intl }) => (
  <header className={styles.header}>
    <h1 className={styles.heading}>
      <a href={getIntlPath({ locale: intl.locale, path: '/' })} className={styles.link}>
        <FormattedMessage id='header.name' />
        <small className={styles.subHeading}>
          <FormattedMessage id='header.tagline' />
        </small>
      </a>
    </h1>
  </header>
);

Header.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Header);
