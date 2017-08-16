import React from 'react';

import { renderMarkdown } from '../../utils/markdown';
import Page from '../../layouts/Page';
import styles from './index.css';
import gifts from './gifts';

const BLOG_PATH = '/blog/posts/2017/08/15/my-giving-pledge-and-why-everyone-should-create-one/';

const GivingPage = () => (
  <Page
    head={{
      title: 'My Giving Pledge | Holman Gao',
      description: 'A little bit about Holman Gao, entrepreneur and freelance ' +
        'developer living in New York',
    }}
    className={styles.container}
    width='narrow'
    >
    <h2>My Giving Pledge</h2>
    <blockquote className={styles.pledgeQuote}>
      I pledge to make a personally significant donation every year to support
      youth education.
    </blockquote>
    <p>
      I created this pledge after I realized how lucky I was to be supported
      by amazing education programs when I was growing up. Those programs
      played a large role in my personal and professional development,
      and investing my own money in the education ecosystem is my way of saying thanks.
    </p>
    <p>
      To read more about my pledge, <a href={BLOG_PATH}>check out my blog post on this topic</a>.
    </p>
    <p>
      Each year, I choose a new organization to support. So far, I&rsquo;ve chosen
      organizations with a mission related to how I was supported.
      For many of these organizations, I continue to support them
      after my first donation either through further donations or by
      volunteering my time or work.
    </p>
    {gifts.map((gift) => (
      <div key={gift.year}>
        <h3>{gift.year}</h3>
        <div className={styles.giftContainer}>
          <div className={styles.giftImageContainer}>
            <a href={gift.organization.url} target='_blank' rel='noopener noreferrer'>
              <img src={gift.organization.image} alt='' />
            </a>
          </div>
          <div className={styles.giftText}>
            <h3>
              <a href={gift.organization.url} target='_blank' rel='noopener noreferrer'>
                {gift.organization.name}
              </a>
            </h3>
            {renderMarkdown(gift.reasonMarkdown)}
          </div>
        </div>
      </div>
    ))}
  </Page>
);

export default GivingPage;
