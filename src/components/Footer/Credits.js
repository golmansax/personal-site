import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

const Justin = () => (
  <a href='http://jvenezue.la/' target='_blank' rel='noopener noreferrer'>Justin Venezuela</a>
);

const Alf = () => (
  <a href='https://www.catronaut.com/' target='_blank' rel='noopener noreferrer'>Alf Gadberry</a>
);

const Credits = ({ intl }) => {
  switch (intl.locale) {
    case 'en':
      return (
        <small>
          Credits: photos by <Justin />, icon by <Alf />
        </small>
      );

    case 'es':
      return (
        <small>
          Atribución: las fotos por <Justin />, el icono por <Alf />
        </small>
      );

    case 'zh':
      return (
        <small>
          致谢：<Justin /> 做的照片，<Alf /> 做的图标
        </small>
      );

    default: throw new Error(`Invalid locale: ${intl.locale}`);
  }
};

Credits.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Credits);
