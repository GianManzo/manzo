'use client';
import {
  LanguagesType,
  TranslationContextData,
  TranslationProviderProps,
} from '@/shared/translations/translations.interfaces';
import PropTypes from 'prop-types';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { useTranslation as i18nUseTranslation } from 'react-i18next';

const TranslationContext = createContext({} as TranslationContextData);

const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
}: TranslationProviderProps) => {
  const { t, i18n } = i18nUseTranslation();
  const [language, setLanguage] = React.useState<LanguagesType>('pt');

  useEffect(() => {
    setLanguage(i18n.language as LanguagesType);
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
    <TranslationContext.Provider
      value={{ translate, changeLanguage, language }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

function useTranslation() {
  const context = useContext(TranslationContext);

  if (!context)
    throw new Error('useTranslation must be used within TranslationProvider');

  return context;
}

export { TranslationProvider, useTranslation };
