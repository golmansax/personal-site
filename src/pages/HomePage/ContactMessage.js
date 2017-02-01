import React, { PropTypes } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

const Email = () => <a href='mailto:holman@golmansax.com'><FormattedMessage id='contact.email' /></a>;
const Twitter = () => (
  <a href='https://twitter.com/golmansax' target='_blank' rel='noopener noreferrer'>
    <FormattedMessage id='contact.twitter' />
  </a>
);

const ContactMessage = ({ intl }) => {
  switch (intl.locale) {
    case 'en':
      return (
        <div>
          Reach out via <Email /> or <Twitter />. I read every message, I promise!
        </div>
      );

    case 'es':
      return (
        <div>
          Contáctame por <Email /> o <Twitter />. Prometo que leeré su mensaje!
        </div>
      );

    case 'zh':
      return (
        <div>
          用<Email />或者<Twitter />跟我联系。我保证我会读你的信息！
        </div>
      );

    default: throw new Error(`Invalid locale: ${intl.locale}`);
  }
};

export default injectIntl(ContactMessage);
