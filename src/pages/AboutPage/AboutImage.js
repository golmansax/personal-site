import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import portraitProfessional from './portrait_professional.jpg';
import portraitOnBench from './portrait_on_bench.jpg';
import portraitSide from './portrait_side.jpg';
import styles from './index.css';

const AboutImage = ({ intl }) => {
  const source = (() => {
    switch (intl.locale) {
      case 'es': return portraitSide;
      case 'en': return portraitProfessional;
      case 'zh': return portraitOnBench;
      default: throw new Error('Invalid locale');
    }
  })();

  return (
    <img src={source} alt='' />
  );
};

export default injectIntl(AboutImage);
