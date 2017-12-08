import React from 'react';
import { FormattedMessage } from 'react-intl';

import Page from '../../layouts/Page';
import ContactMessage from './ContactMessage';
import styles from './index.css';

const ContactPage = () => (
  <Page
    head={{
      title: 'Contact | Holman Gao',
      description: 'Up-to-date curriculum vitae/resume/LinkedIn replacement. ' +
        'Includes work, education, side projects, volunteering, hobbies, languages.',
    }}
    className={styles.container}
    width='narrow'
    >
    <h2><FormattedMessage id='pages.contact' /></h2>
    <ContactMessage />
    <br />
    <br />
    <br />
  </Page>
);

export default ContactPage;
