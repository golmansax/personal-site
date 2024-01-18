import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

const Email = () => (
  <a href='mailto:holman@golmansax.com'><FormattedMessage id='contact.email' /></a>
);

const LinkedIn = () => (
  <a href='https://www.linkedin.com/in/holman-gao/' target='_blank' rel='noopener noreferrer'>
    LinkedIn
  </a>
);

const ContactMessage = ({ intl }) => {
  switch (intl.locale) {
    case 'en':
      return (
        <div>
          Reach out via <Email /> or <LinkedIn />. I read every message, I promise!
        </div>
      );

    case 'es':
      return (
        <div>
          Contáctame por <Email /> o <LinkedIn />. Prometo que leeré tu mensaje!
        </div>
      );

    case 'zh':
      return (
        <div>
          请用<Email />或者<LinkedIn />跟我联系，很期待收到您的信息！
        </div>
      );

    default: throw new Error(`Invalid locale: ${intl.locale}`);
  }
};

ContactMessage.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(ContactMessage);
