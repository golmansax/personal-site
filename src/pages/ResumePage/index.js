import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Page from '../../layouts/Page';

import styles from './index.css';

const DOC_ID = '0BzLh8cg8kVzCa093RmtkYkFoZG8';
const URL = 'https://docs.google.com/viewer?' +
  `srcid=${DOC_ID}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`;

const ResumePage = () => (
  <Page
    head={{ title: 'Holman Gao – entrepreneur | developer | in New York' }}
    >
    <h2>Resume</h2>
    <div className={styles.pdfContainer}>
      <iframe src={URL} className={styles.pdf} />
    </div>
  </Page>
);

export default ResumePage;
