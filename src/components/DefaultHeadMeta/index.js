import React, { PropTypes } from 'react';
import { injectIntl, intlShape } from 'react-intl';
import Helmet from 'react-helmet';

const DefaultHeadMeta = ({ meta, scripts, intl }, { metadata: { pkg } }) => (
  <Helmet htmlAttributes={{ lang: intl.locale }}>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
    />
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
      `}
    </script>
    <link
      rel='icon'
      href='https://www.gravatar.com/avatar/f14bfcfb11c5a367dc8c88bc3dd43189?s=16'
    />
    <link
      type='text/css'
      rel='stylesheet'
      href='https://fonts.googleapis.com/css?family=Libre+Franklin:400,700'
    />
    <meta
      name='generator'
      content={`${process.env.PHENOMIC_NAME} ${process.env.PHENOMIC_VERSION}`}
    />
    <meta property='og:site_name' content={pkg.name} />
    <meta name='twitter:site' content={`@${pkg.twitter}`} />
    <script src='https://cdn.polyfill.io/v2/polyfill.min.js' />

    { /* meta viewport safari/chrome/edge */ }
    <meta name='viewport' content='width=device-width, initial-scale=1' />

    <style>{ '@-ms-viewport { width: device-width; }' }</style>
  </Helmet>
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
