import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import styles from './index.css';

const Justin = () => (
  <a href='http://jvenezue.la/' target='_blank' rel='noopener noreferrer'>Justin Venezuela</a>
);

const Ali = () => (
  <a href='http://alispagnola.com/' target='_blank' rel='noopener noreferrer'>Ali Spagnola</a>
);

const Credits = ({ intl }) => {
  switch (intl.locale) {
    case 'en':
      return (
        <small>
          Credits: photos by <Justin />, saxophone icon by <Ali />
        </small>
      );

    case 'es':
      return (
        <small>
          Atribución: las fotos por <Justin />, el icono de saxofón por <Ali />
        </small>
      );

    case 'zh':
      return (
        <small>
          致谢：<Justin /> 做的照片，<Ali /> 做的萨克斯图标
        </small>
      );

    default: throw new Error(`Invalid locale: ${intl.locale}`);
  }
};

Credits.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Credits);
