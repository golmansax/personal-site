import React from 'react';

import Page from '../../layouts/Page';
import styles from './index.css';
import gifts from './gifts';

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
    <q>
      I pledge to make a personally significant donation to support youth
      education every year on my birthday.
    </q>
    <p>
      When I graduated college, I made a pledge to make a personally significant
      donation every year on my birthday.

      I was fortunate enough to benefit from great programs when I was young
      and I want to support organizations that empower youth.
    </p>
    {gifts.map((gift) => (
      <div key={gift.year}>
        <h3>{gift.year}</h3>
        <div className={styles.giftContainer}>
          <div className={styles.giftImageContainer}>
            <a href={gift.organization.url}><img src={gift.organization.image} /></a>
          </div>
          <div className={styles.giftText}>
            <h3>
              <a href={gift.organization.url} target='_blank'>
                {gift.organization.name}
              </a>
            </h3>
            <p>{gift.reason}</p>
          </div>
        </div>
      </div>
    ))}
  </Page>
);

export default GivingPage;
