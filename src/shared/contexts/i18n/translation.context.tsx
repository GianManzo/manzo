'use client';

import { DefaultTemplate } from '@/shared/components';
import {
  LanguagesType,
  TranslationContextData,
  TranslationProviderProps,
} from '@/shared/translations/translations.interfaces';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useTranslation as i18nUseTranslation } from 'react-i18next';

const TranslationContext = createContext({} as TranslationContextData);

const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
}: TranslationProviderProps) => {
  const { t, i18n } = i18nUseTranslation();
  const [language, setLanguage] = useState<LanguagesType>('pt');
  //created state loading to render the component only when the language is loaded
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLanguage(i18n.language as LanguagesType);
    setLoading(false);
  }, [i18n]);

  const translate = useCallback(
    (key: string, variables?: object) => t(key, variables),
    [t],
  );

  const changeLanguage = useCallback(
    (code: string) => {
      i18n.changeLanguage(code);
    },
    [i18n],
  );

  return (
    <>
      {!loading && (
        <TranslationContext.Provider
          value={{ translate, changeLanguage, language }}
        >
          <DefaultTemplate>{children}</DefaultTemplate>
        </TranslationContext.Provider>
      )}
    </>
  );
};

function useTranslation() {
  const context = useContext(TranslationContext);

  if (!context)
    throw new Error('useTranslation must be used within TranslationProvider');

  return context;
}

export { TranslationProvider, useTranslation };
