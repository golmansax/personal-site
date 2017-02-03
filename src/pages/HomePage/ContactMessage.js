import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

const Email = () => (
  <a href='mailto:holman@golmansax.com'><FormattedMessage id='contact.email' /></a>
);

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
          Contáctame por <Email /> o <Twitter />. Prometo que leeré tu mensaje!
        </div>
      );

    case 'zh':
      return (
        <div>
          请用<Email />或者<Twitter />跟我联系。很期待收到您的信息！
        </div>
      );

    default: throw new Error(`Invalid locale: ${intl.locale}`);
  }
};

ContactMessage.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(ContactMessage);
