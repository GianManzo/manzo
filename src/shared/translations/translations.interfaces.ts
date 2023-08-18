export type LanguagesType = 'pt' | 'en' | 'es';

export type TranslateFunction = (key: string, variables?: object) => string;

export interface TranslationContextData {
  language: string;
  translate: TranslateFunction;
  changeLanguage: (languageCode: string) => void;
}

export interface TranslationProviderProps {
  children: React.ReactNode;
}
