import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

const MyPortfolio = () => <a href='/portfolio'><FormattedMessage id='home.myPortfolio' /></a>;

const PortfolioMessage = ({ intl }) => {
  switch (intl.locale) {
    case 'en': return <div>Check out <MyPortfolio />.</div>;

    case 'es': return <div>Mira a <MyPortfolio />.</div>;

    case 'zh': return <div>去<MyPortfolio /></div>;

    default: throw new Error(`Invalid locale: ${intl.locale}`);
  }
};

PortfolioMessage.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(PortfolioMessage);
