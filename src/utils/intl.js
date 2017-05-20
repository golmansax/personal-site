import { addLocaleData } from 'react-intl';
import __intlEN from 'react-intl/locale-data/en';
import __intlES from 'react-intl/locale-data/es';
import __intlZH from 'react-intl/locale-data/zh';
import flatten from 'flat';

// Get our translations files
import localeEN from '../translations/en.yml';
import localeES from '../translations/es.yml';
import localeZH from '../translations/zh.yml';

addLocaleData(__intlEN);
addLocaleData(__intlES);
addLocaleData(__intlZH);

const locales = ['es', 'en', 'zh'];
const defaultLocale = 'en';
const messages = {
  en: flatten(localeEN),
  es: flatten(localeES),
  zh: flatten(localeZH),
};

export function getLocale(url) {
  // Get the 'en' from the url 'http://domain.tld/en'
  const firstURIlevel = url.replace(/^\//, '').split('/')[0];

  // If there is not the locale in the url, we take the default locale
  return (firstURIlevel && locales.indexOf(firstURIlevel) > -1) ? firstURIlevel
    : defaultLocale;
}

export function getPathWithoutIntl(url) {
  const regex = new RegExp(`/(${locales.join('|')})/`);
  return url.replace(regex, '/');
}

export function getIntl(locale) {
  // We will inject this into IntlProvider
  return {
    locale,
    messages: messages[locale],
    defaultLocale,
  };
}

export function getIntlPath({ locale, path }) {
  switch (locale) {
    case 'es':
    case 'zh':
      return `/${locale}${path}`;

    default: return path;
  }
}
