export interface LanguageItemProps {
  languages: CountryIconProps[];
  handleLanguageChange: (newLanguage: string) => void;
}

export interface CountryIconProps {
  id: string;
  countryCode: string;
}
