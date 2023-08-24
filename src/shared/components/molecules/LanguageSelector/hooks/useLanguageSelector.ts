import { useTranslation } from '@/shared/contexts/i18n/translation.context';
import { ISO_COUNTRY_CODES } from '@/shared/translations/constants';
import { useState } from 'react';

export const useLanguageSelector = () => {
  const { changeLanguage, language, translate } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [currentFlag, setCurrentFlag] = useState('br');
  const [languageUserUser, setLanguageUser] = useState<null | HTMLElement>(
    null,
  );

  const handleCloseUserMenu = () => {
    setLanguageUser(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageUser(event.currentTarget);
  };

  const handleLanguageChange = (newLanguage: string) => {
    let targetLanguage = currentLanguage;
    let targetFlag = currentFlag;

    if (newLanguage === 'br') {
      targetLanguage = 'pt';
      targetFlag = newLanguage;
    } else if (newLanguage === 'us') {
      targetLanguage = 'en';
      targetFlag = newLanguage;
    } else {
      targetFlag = newLanguage;
      targetLanguage = newLanguage;
    }

    if (newLanguage !== currentLanguage) {
      localStorage.setItem('language', targetLanguage);
      changeLanguage(targetLanguage);
      setCurrentLanguage(targetLanguage);
      setCurrentFlag(targetFlag);
      setLanguageUser(null);
    }
  };

  const languages = Object.values(ISO_COUNTRY_CODES).map(locale => ({
    id: locale,
    countryCode: locale,
  }));

  const getLanguageUser = () => {
    const savedLanguage = localStorage.getItem('language');
    let targetFlag = currentFlag;

    if (savedLanguage === 'pt') {
      targetFlag = 'br';
    } else if (savedLanguage === 'en') {
      targetFlag = 'us';
    } else {
      targetFlag = savedLanguage as string;
    }

    if (savedLanguage && savedLanguage !== currentLanguage) {
      setCurrentFlag(targetFlag);
      setCurrentLanguage(savedLanguage);
      changeLanguage(savedLanguage);
    }
  };

  return {
    handleLanguageChange,
    handleCloseUserMenu,
    handleOpenUserMenu,
    translate,
    getLanguageUser,
    languages,
    languageUserUser,
    currentFlag,
  };
};
