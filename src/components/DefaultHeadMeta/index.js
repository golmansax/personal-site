import React, { PropTypes } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Helmet from 'react-helmet';

const DefaultHeadMeta = ({ meta, scripts, intl }, { metadata: { pkg } }) => (
  <div hidden>
    <Helmet
      htmlAttributes={{ lang: intl.locale }}
      link={[
        {
          rel: 'icon',
          href: 'https://www.gravatar.com/avatar/f14bfcfb11c5a367dc8c88bc3dd43189?s=16',
        },
        {
          type: 'text/css',
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Libre+Franklin:400,700',
        },
      ].filter((link) => link)}
      meta={[
        {
          name: 'generator',
          content: `${process.env.PHENOMIC_NAME} ${process.env.PHENOMIC_VERSION}`,
        },
        { property: 'og:site_name', content: pkg.name },
        { name: 'twitter:site', content: `@${pkg.twitter}` },
        ...(meta || []),
      ]}
      script={[
        { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' },
        ...(scripts || []),
      ]}
    />

    { /* meta viewport safari/chrome/edge */ }
    <Helmet
      meta={[{
        name: 'viewport', content: 'width=device-width, initial-scale=1',
      }]}
    />
    <style>{ '@-ms-viewport { width: device-width; }' }</style>
  </div>
);

DefaultHeadMeta.propTypes = {
  meta: React.PropTypes.arrayOf(React.PropTypes.object),
  scripts: React.PropTypes.arrayOf(React.PropTypes.object),
  intl: intlShape.isRequired,
};

DefaultHeadMeta.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default injectIntl(DefaultHeadMeta);
