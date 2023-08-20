import { HTMLAttributes } from 'react';

export interface ICountryIconProps extends HTMLAttributes<HTMLSpanElement> {
  countryCode: string;
  size?: number;
}
