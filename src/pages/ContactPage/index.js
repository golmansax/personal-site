import React from 'react';
import { FormattedMessage } from 'react-intl';

import Page from '../../layouts/Page';
import ContactMessage from './ContactMessage';
import styles from './index.css';

const ContactPage = () => (
  <Page
    head={{
      title: 'Contact | Holman Gao',
      description: 'Reach out to me for whatever reason!',
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
