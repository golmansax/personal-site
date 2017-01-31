import { addLocaleData } from 'react-intl';
import __intlEN from 'react-intl/locale-data/en';
import __intlES from 'react-intl/locale-data/es';
import flatten from 'flat';

// Get our translations files
import localeEN from '../translations/en.yml';
import localeES from '../translations/es.yml';

// Load 'en' and 'es' utils
addLocaleData(__intlEN);
addLocaleData(__intlES);

const locales = ['es', 'en'];
const defaultLocale = 'en';
const messages = {
  en: flatten(localeEN),
  es: flatten(localeES),
};

export function getLocale(url) {
  // Get the 'en' from the url 'http://domain.tld/en'
  const firstURIlevel = url.replace(/^\//, '').split('/')[0];

  // If there is not the locale in the url, we take the default locale
  return (firstURIlevel && locales.indexOf(firstURIlevel) > -1) ? firstURIlevel
    : defaultLocale;
}

export function getIntl(locale) {
  // We will inject this into IntlProvider
  return {
    locale,
    messages: messages[locale],
    defaultLocale,
  };
}
