import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

const Federico = () => (
  <a href='https://www.fedephotography.com/' target='_blank' rel='noopener noreferrer'>Federico Rodriguez Caldentey</a>
);

const Alf = () => (
  <a href='https://www.catronaut.com/' target='_blank' rel='noopener noreferrer'>Alf Gadberry</a>
);

const Credits = ({ intl }) => {
  switch (intl.locale) {
    case 'en':
      return (
        <small>
          Credits: photos by <Federico />, icon by <Alf />
        </small>
      );

    case 'es':
      return (
        <small>
          Atribución: las fotos por <Federico />, el icono por <Alf />
        </small>
      );

    case 'zh':
      return (
        <small>
          致谢：<Federico /> 做的照片，<Alf /> 做的图标
        </small>
      );

    default: throw new Error(`Invalid locale: ${intl.locale}`);
  }
};

Credits.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Credits);
