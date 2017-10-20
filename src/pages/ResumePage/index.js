import React from 'react';
import { FormattedMessage } from 'react-intl';

import Page from '../../layouts/Page';
import styles from './index.css';

const URL = '/public/resumes/gao_holman_resume_20171019.pdf';

const ResumePage = () => (
  <Page
    head={{
      title: 'Resume | Holman Gao',
      description: 'Up-to-date curriculum vitae/resume/LinkedIn replacement. Includes work, education, ' +
        'side projects, volunteering, hobbies, languages.',
    }}
    className={styles.container}
    >
    <h2><FormattedMessage id='pages.resume' /></h2>
    <div className={styles.pdfContainer}>
      <iframe src={URL} className={styles.pdf} />
    </div>
  </Page>
);

export default ResumePage;
