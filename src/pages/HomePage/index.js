import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl';

import ContactMessage from './ContactMessage';
import PortfolioMessage from './PortfolioMessage';
import Page from '../../layouts/Page';
import styles from './index.css';

const MAIN_PROJECTS = [
  {
    text: 'NaturalizeUs',
    slug: 'naturalizeUs',
    positionSlug: 'cofounder',
  },
  {
    text: 'Verse',
    slug: 'verse',
    url: 'https://verse.press',
    positionSlug: 'freelanceDeveloper',
  },
];

const SIDE_PROJECTS = [
  {
    text: 'BoostMySchool',
    url: 'https://www.boostmyschool.com',
    slug: 'boostMySchool',
  },
  {
    text: 'BookBooster',
    url: 'https://bayarea.bookbooster.org',
    slug: 'bookBooster',
  },
  {
    text: 'Thum.io',
    url: 'https://www.thum.io',
    slug: 'thumIo',
  },
];

const Project = ({ text, url, slug, positionSlug }) => (
  <div>
    {url ? (
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className={classnames([styles.upToLink, styles[slug]])}
        >
        {text}
      </a>
    ) : (
      <span className={classnames([styles.upToLink, styles[slug]])}>
        {text}
      </span>
    )}
    {positionSlug && (
      <small className={styles.position}>
        <FormattedMessage id={`positions.${positionSlug}`} />
      </small>
    )}
  </div>
);

Project.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
  slug: PropTypes.string.isRequired,
  positionSlug: PropTypes.string,
};

const HomePageContent = ({ className }) => (
  <div className={className}>
    <div className={styles.contentSection}>
      <h4 className={styles.contentSectionHeading}><FormattedMessage id='home.mainProjects' /></h4>
      <div>
        {MAIN_PROJECTS.map((project) => (
          <Project key={project.url} {...project} />
        ))}
      </div>
    </div>
    <div className={styles.contentSection}>
      <h4 className={styles.contentSectionHeading}><FormattedMessage id='home.sideProjects' /></h4>
      <div>
        {SIDE_PROJECTS.map((project) => (
          <Project key={project.url} {...project} />
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
