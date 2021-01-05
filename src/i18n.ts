import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import CommonEn from '~/locales/en/commons.json';
import CommonJa from '~/locales/ja/commons.json';

const defaultLoadedResources = {
  en: {
    commons: CommonEn,
  },
  ja: {
    commons: CommonJa,
  },
};

i18n
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(
    {
      resources: defaultLoadedResources,

      fallbackLng: 'en',
      debug: process.env.NODE_ENV !== 'production',
      ns: Array.from(Object.keys(defaultLoadedResources.en)),
      defaultNS: 'commons',
      load: 'languageOnly', // 'all' --> ['en-US', 'en', 'dev'], 'currentOnly' --> 'en-US', 'languageOnly' --> 'en'
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    },
    (err) => {
      if (err) {
        return console.log('something went wrong loading', err);
      }
    },
  );

i18n.on('failedLoading', function (lng, ns, msg) {
  console.log(lng, ns, msg);
});

export default i18n;
