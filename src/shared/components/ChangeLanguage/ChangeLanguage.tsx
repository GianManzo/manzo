'use client';

import { useTranslation } from '@/shared/contexts/i18n/translation.context';
import { useEffect, useState } from 'react';
import { Button } from '..';

export const LanguageSelector = () => {
  const { changeLanguage, language, translate } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== currentLanguage) {
      changeLanguage(savedLanguage);
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (newLanguage: string) => {
    if (newLanguage !== currentLanguage) {
      localStorage.setItem('language', newLanguage);
      changeLanguage(newLanguage);
      setCurrentLanguage(newLanguage);
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={() => handleLanguageChange('en')}>
        English
      </Button>
      <Button variant="contained" onClick={() => handleLanguageChange('pt')}>
        Brasil
      </Button>
    </div>
  );
};
