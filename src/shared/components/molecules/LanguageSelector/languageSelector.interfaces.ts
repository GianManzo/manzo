export interface LanguageItemProps {
  languages: CountryIconProps[];
  handleLanguageChange: (newLanguage: string) => void;
  currentFlag: string;
}

export interface CountryIconProps {
  id: string;
  countryCode: string | 'br' | 'us' | 'es';
}
