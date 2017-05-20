import React, { PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

const ACROYOGA_LINK = 'http://www.sfgate.com/music/slideshow/' +
  'Outside-Lands-2014-91325.php';

const MyPortfolio = () => <a href='/portfolio'><FormattedMessage id='home.myPortfolio' /></a>;

const Intro = ({ intl }) => {
  switch (intl.locale) {
    case 'en':
      return (
        <p>
          Hi! My name is Holman, I am an entrepreneur and freelance developer
          with a love for education.  See examples of my work on <MyPortfolio />.
        </p>
      );

    case 'es':
      return (
        <p>
          ¡Hola! Me llamo Holman, soy empresario y desarrollador freelance con
          amor por educación.  Mira a <MyPortfolio /> por ejemplos de mi trabajo.
        </p>
      );

    case 'zh': return <div>去<MyPortfolio /></div>;

    default: throw new Error(`Invalid locale: ${intl.locale}`);
  }
};

Intro.propTypes = {
  intl: intlShape.isRequired,
};

const AboutBlurb = ({ intl, className }) => (
  <div className={className}>
    <Intro intl={intl} />
    <p>
      I currently live in Manhattan.  In my free time, I like to sing and
      play guitar, go to salsa and bachata socials, play volleyball, and
      sometimes even{' '}
      <a
        href={ACROYOGA_LINK}
        target='_blank'
        rel='noopener noreferrer'
        >
        do acroyoga
      </a>.
    </p>
    <p><FormattedMessage id='about.motto' /></p>
  </div>
);

AboutBlurb.propTypes = {
  className: PropTypes.string,
  intl: intlShape.isRequired,
};

export default injectIntl(AboutBlurb);
