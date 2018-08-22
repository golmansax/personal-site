import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { renderMarkdown } from '../../utils/markdown';
import styles from './index.css';

const Gift = ({ gift }) => (
  <div>
    {/* <h3>{gift.year}</h3> */}
    <div className={styles.giftContainer}>
      <div
        className={classnames(styles.giftImageContainer, {
          [styles.imagePadding]: gift.organization.imagePadding,
        })}
        >
        <a href={gift.organization.url} target='_blank' rel='noopener noreferrer'>
          <img src={gift.organization.image} alt='' />
        </a>
      </div>
      <div className={styles.giftText}>
        <h3>
          <a href={gift.organization.url} target='_blank' rel='noopener noreferrer'>
            {gift.organization.name}
          </a>
        </h3>
        {renderMarkdown(gift.reasonMarkdown)}
      </div>
    </div>
  </div>
);

Gift.propTypes = {
  gift: PropTypes.object.isRequired,
};

export default Gift;
