'use client';

import { Button, Icon } from '@/shared/components';
import { useTranslation } from '@/shared/contexts/i18n/translation.context';
import { useState } from 'react';

export default function Home() {
  const { language, changeLanguage, translate } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };
  return (
    <div style={{ height: '2000px' }}>
      <h1 style={{ color: 'red' }}>{translate('header')}</h1>
      <Button
        size="large"
        endIcon={<Icon iconName="gitLogo" />}
        variant="outlined"
        onClick={handleChangeLanguage}
      >
        Repo
      </Button>
    </div>
  );
}
