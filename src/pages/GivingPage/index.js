import React from 'react';

import Page from '../../layouts/Page';
import Gift from './Gift';
import styles from './index.css';
import gifts from './gifts';

const BLOG_PATH = '/blog/posts/2017/08/15/' +
  'my-giving-pledge-and-why-everyone-would-benefit-from-their-own/';

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
      and investing my earnings in the education ecosystem is my way of saying thanks.
    </p>
    <p>
      When I started this pledge, I donated to a new organization every year so
      that I would continually discover awesome organizations in this space.
      However, I realized that donating one year and not the next is not the best way
      to support organizations that prefer to have a consistent source of
      donations.  Thus, I decided to choose a few organizations to give monthly to
      and support the rest by volunteering my time, work, or network.
    </p>
    <p>
      To read more about how my pledge started,{' '}
      <a href={BLOG_PATH} target="_blank">check out my blog post on this topic</a>.
    </p>
    <h3>Actively Supporting</h3>
    {gifts.filter(({ current }) => current).map((gift) => (
      <Gift key={gift.organization.name} gift={gift} />
    ))}
    <h3>Previously Supported</h3>
    {gifts.filter(({ current }) => !current).map((gift) => (
      <Gift key={gift.organization.name} gift={gift} />
    ))}
  </Page>
);

export default GivingPage;
