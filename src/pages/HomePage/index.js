import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';

import ContactMessage from './ContactMessage';
import PortfolioMessage from './PortfolioMessage';
import Page from '../../layouts/Page';
import styles from './index.css';

const UP_TO = [
  {
    text: 'BoostMySchool',
    url: 'https://www.boostmyschool.com',
    slug: 'boostMySchool',
  },
  {
    text: 'Thum.io',
    url: 'https://www.thum.io',
    slug: 'thumIo',
  },
  {
    text: 'BookBooster',
    url: 'https://bayarea.bookbooster.org',
    slug: 'bookBooster',
  },
  {
    text: 'Verse',
    url: 'https://verse.press',
    slug: 'verse',
    positionSlug: 'freelanceDeveloper',
  },
  {
    text: 'Viking Code School',
    url: 'https://www.vikingcodeschool.com',
    slug: 'viking',
    positionSlug: 'courseMentor',
  },
];

const HomePageContent = ({ className }) => (
  <div className={className}>
    <div className={styles.contentSection}>
      <h4 className={styles.contentSectionHeading}><FormattedMessage id='home.current' /></h4>
      <div>
        {UP_TO.map(({ slug, url, text, positionSlug }) => (
          <div key={url}>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className={classnames([styles.upToLink, styles[slug]])}
              >
              {text}
            </a>
            {positionSlug && (
              <small className={styles.position}>
                <FormattedMessage id={`positions.${positionSlug}`} />
              </small>
            )}
          </div>
          ))}
      </div>
    </div>
    <div className={styles.contentSection}>
      <h4 className={styles.contentSectionHeading}>
        <FormattedMessage id='home.portfolioIntro' />
      </h4>
      <PortfolioMessage />
    </div>
    <div className={styles.contentSection}>
      <h4 className={styles.contentSectionHeading}><FormattedMessage id='home.contact' /></h4>
      <ContactMessage />
    </div>
  </div>
  );

HomePageContent.propTypes = {
  className: PropTypes.string,
};

const HomePage = (props) => (
  <Page
    {...props}
    head={{
      title: 'Holman Gao – entrepreneur | developer | in New York',
      description: 'Personal site of Holman Gao, entrepreneur and freelance developer ' +
        'with a love for education. University of Maryland and Blair Magnet alum.',
    }}
    >
    <div className={styles.contentContainer}>
      <div className={styles.leftColumn}>
        &nbsp;
      </div>
      <div className={styles.rightColumn}>
        <HomePageContent className={styles.tabletContent} />
      </div>
    </div>
    <HomePageContent className={styles.mobileContent} />
  </Page>
);

export default HomePage;
