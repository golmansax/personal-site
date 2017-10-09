import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { IntlProvider } from 'react-intl';
import classnames from 'classnames';
import { joinUri } from 'phenomic';

import { getIntl, getLocale } from '../../utils/intl';
import DefaultHeadMeta from '../../components/DefaultHeadMeta';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './index.css';

function getPathnameFromLocation(location) {
  const { pathname } = location;
  if (pathname[0] === '/') { return pathname; }
  return `/${pathname}`;
}

const Page = (
  {
    className,
    head,
    children,
    showHeader,
    showFooter,
    width,
  },
  {
    metadata: { pkg },
    location,
  },
) => {
  const metaTitle = head.metaTitle ? head.metaTitle : head.title;

  const pathname = getPathnameFromLocation(location);

  const locale = getLocale(location.pathname);
  const intl = getIntl(locale);

  return (
    <IntlProvider {...intl}>
      <div
        className={classnames({
          [styles.pageContainer]: true,
          [styles[width]]: styles[width],
        })}
        >
        <DefaultHeadMeta />
        <Helmet>
          <title>{metaTitle}</title>
          <meta property='og:title' content={metaTitle} />
          <meta
            property='og:url'
            content={joinUri(process.env.PHENOMIC_USER_URL, pathname)}
          />
          <meta property='og:description' content={head.description} />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content={metaTitle} />
          <meta name='twitter:description' content={head.description} />
          <meta name='description' content={head.description} />
        </Helmet>
        {showHeader && <Header />}
        <div className={classnames({ [styles.page]: true, [className]: className })}>
          {children}
        </div>
        {showFooter && <Footer currentPath={pathname} />}
      </div>
    </IntlProvider>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  head: PropTypes.object.isRequired,
  showHeader: PropTypes.bool.isRequired,
  showFooter: PropTypes.bool.isRequired,
  width: PropTypes.oneOf(['narrow', 'default']),
};

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

Page.defaultProps = {
  showHeader: true,
  showFooter: true,
  width: 'default',
};

export default Page;
