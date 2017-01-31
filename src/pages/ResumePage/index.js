import React from 'react';
import { FormattedMessage } from 'react-intl';

import Page from '../../layouts/Page';
import styles from './index.css';

const DOC_ID = '0BzLh8cg8kVzCa093RmtkYkFoZG8';
const URL = 'https://docs.google.com/viewer?' +
  `srcid=${DOC_ID}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`;

const ResumePage = () => (
  <Page
    head={{
      title: 'Resume | Holman Gao',
      description: 'Up-to-date curriculum vitae/resume. Includes work, education, ' +
        'side projects, volunteering, hobbies.',
    }}
    className={styles.container}
    >
    <h2><FormattedMessage id='resume.resume' /></h2>
    <div className={styles.pdfContainer}>
      <iframe src={URL} className={styles.pdf} />
    </div>
  </Page>
);

export default ResumePage;
