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
          Hi! I’m Holman, CEO & founder with a passion for education.
          Previously I was an engineer at startups, see
          examples of my work on <MyPortfolio />.
        </p>
      );

    case 'es':
      return (
        <p>
          ¡Hola! Soy Holman, CEO & fundador con pasión por la educación.
          Previamente era ingeniero de software en startups,
          mira a <MyPortfolio /> por ejemplos de mi trabajo.
        </p>
      );

    case 'zh':
      return (
        <p>
          嗨！我是高鸿鸣，软件背景的CEO和创始人。
          去我的<MyPortfolio />如果你想看我做了什么。
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
          I live in Manhattan.  In my free time, I like to play sports
          (pickleball, volleyball), make music with friends (guitar, karaoke),
          and work on <BlogLink />.
        </p>
      );

    case 'es':
      return (
        <p>
          Vivo en Manhattan.  En mi tiempo libre, me gusta
          jugar deporte (pickleball, voleibol), cantar y tocar la guitarra,
          y trabajar en <BlogLink />.
        </p>
      );

    case 'zh':
      return (
        <p>
          我住在曼哈顿。
          当我有空暇，我喜欢打网球和网球，
          唱歌和弹吉他，和努力<BlogLink />。
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
