import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import warning from 'warning';
import { joinUri } from 'phenomic';

import DefaultHeadMeta from '../../components/DefaultHeadMeta';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './index.css';

const Page = (
  {
    __filename,
    __url,
    head,
    children,
  },
  {
    metadata: { pkg },
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

  return (
    <div className={styles.pageContainer}>
      <DefaultHeadMeta />
      <Helmet
        title={metaTitle}
        meta={meta}
      />
      <Header />
      <div className={styles.page}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
};

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Page;
