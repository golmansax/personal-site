import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';
import classnames from 'classnames';
import warning from 'warning';
import { joinUri } from 'phenomic';

import { getIntl, getLocale } from '../../utils/intl';
import DefaultHeadMeta from '../../components/DefaultHeadMeta';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './index.css';

const Page = (
  {
    className,
    __filename,
    __url,
    head,
    children,
    showHeader,
    showFooter,
  },
  {
    metadata: { pkg },
    location,
  },
) => {
  warning(
    typeof head.title === 'string',
    `Your page '${__filename}' needs a title`,
  );

  const metaTitle = head.metaTitle ? head.metaTitle : head.title;

  const meta = [
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: metaTitle },
    {
      property: 'og:url',
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: 'og:description', content: head.description },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: metaTitle },
    { name: 'twitter:creator', content: `@${pkg.twitter}` },
    { name: 'twitter:description', content: head.description },
    { name: 'description', content: head.description },
  ];

  const locale = getLocale(location.pathname);
  const intl = getIntl(locale);

  return (
    <IntlProvider {...intl}>
      <div className={styles.pageContainer}>
        <DefaultHeadMeta />
        <Helmet
          title={metaTitle}
          meta={meta}
        />
        {showHeader && <Header />}
        <div className={classnames({ [styles.page]: true, [className]: className })}>
          {children}
        </div>
        {showFooter && <Footer />}
      </div>
    </IntlProvider>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  showHeader: PropTypes.bool.isRequired,
  showFooter: PropTypes.bool.isRequired,
};

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

Page.defaultProps = {
  showHeader: true,
  showFooter: true,
};

export default Page;
