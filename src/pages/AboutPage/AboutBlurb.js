import React, { PropTypes } from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

const BlogLink = () => (
  <a href='/blog'>
    <FormattedMessage id='about.blog' />
  </a>
);

/*
const ACROYOGA_LINK = 'http://www.sfgate.com/music/slideshow/' +
  'Outside-Lands-2014-91325.php';

const AcroyogaLink = () => (
  <a
    href={ACROYOGA_LINK}
    target='_blank'
    rel='noopener noreferrer'
    >
    <FormattedMessage id='about.acroyoga' />
  </a>
);
*/

const MyPortfolio = () => <a href='/portfolio'><FormattedMessage id='home.myPortfolio' /></a>;

const Intro = ({ intl }) => {
  switch (intl.locale) {
    case 'en':
      return (
        <p>
          Hi! My name is Holman, I am a software engineer turned entrepreneur
          with a passion for education.  See examples of my work on <MyPortfolio />.
        </p>
      );

    case 'es':
      return (
        <p>
          ¡Hola! Me llamo Holman, soy ingeniero de software convertido en emprendedor
          con pasión por la educación.  Mira a <MyPortfolio /> por ejemplos de mi trabajo.
        </p>
      );

    case 'zh':
      return (
        <p>
          你好！我叫高鸿鸣。我是软件工程师背景的创业者。
          去我的<MyPortfolio />如果你想看我我做了什么。
        </p>
      );

    default: throw new Error(`Invalid locale: ${intl.locale}`);
  }
};

Intro.propTypes = {
  intl: intlShape.isRequired,
};

const Hobbies = ({ intl }) => {
  switch (intl.locale) {
    case 'en':
      return (
        <p>
          I live in Manhattan.  In my free time, I like to sing and
          play guitar, play pick-up volleyball, and <BlogLink />.
        </p>
      );

    case 'es':
      return (
        <p>
          Vivo en Manhattan.  En mi tiempo libre, me gusta cantar y tocar la
          guitarra, jugar voleibol, y <BlogLink />.
        </p>
      );

    case 'zh':
      return (
        <p>
          我住在曼哈顿。
          当我有空暇，我喜欢唱歌和弹吉他，打排球，和<BlogLink />。
        </p>
      );

    default: throw new Error(`Invalid locale: ${intl.locale}`);
  }
};

Hobbies.propTypes = {
  intl: intlShape.isRequired,
};

const Motto = ({ intl }) => {
  switch (intl.locale) {
    case 'en':
      return (
        <p>
          My life motto is: have fun, <a href='/giving'>be thankful</a>, and
          improve the world the best you can.
        </p>
      );

    case 'es':
      return (
        <p>
          Mi lema de vida es: divierte, <a href='/giving'>sé agradecido</a>, y
          mejora el mundo lo mejor que pueda.
        </p>
      );

    case 'zh':
      return (
        <p>
          我的人生座右铭是：每天应该尝试有开心，<a href='/giving'>有感激</a>，和改善世界。
        </p>
      );

    default: throw new Error(`Invalid locale: ${intl.locale}`);
  }
};

Motto.propTypes = {
  intl: intlShape.isRequired,
};

const AboutBlurb = ({ intl, className }) => (
  <div className={className}>
    <Intro intl={intl} />
    <Hobbies intl={intl} />
    <Motto intl={intl} />
  </div>
);

AboutBlurb.propTypes = {
  className: PropTypes.string,
  intl: intlShape.isRequired,
};

export default injectIntl(AboutBlurb);
