import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en-US';
import translationZH from './locales/zh-CN';

const resources = {
  en: {
    translation: translationEN
  },
  zh: {
    translation: translationZH
  }
};
i18n
  .use(initReactI18next)
  .init({
    lng: 'zh',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    // language resources
    resources
  });

export default i18n;
