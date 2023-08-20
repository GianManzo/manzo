import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import en from '@/shared/translations/en.json';
import pt from '@/shared/translations/pt.json';
import es from '@/shared/translations/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      ...en,
    },

    pt: {
      ...pt,
    },
    es: {
      ...es,
    },
  },
  lng: 'pt',
});
