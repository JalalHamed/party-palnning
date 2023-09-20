import i18n from 'i18next';
import en from 'locales/en.json';
import fa from 'locales/fa.json';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: { en, fa },
  lng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
