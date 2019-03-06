import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import portraitProfessional from './portrait_professional.jpg';
import portraitOnBench from './portrait_on_bench.jpg';
import portraitSide from './portrait_side.jpg';

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

AboutImage.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(AboutImage);
