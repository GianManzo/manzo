import React from 'react';

import { ICountryIconProps } from './countryIcon.interfaces';
import { Span } from './countryIcon.styles';

/** CountryIcon use <b>flag-icon-css lib</b> to render the country flags.
 *
 * Click <a href="https://github.com/lipis/flag-icon-css">here</a> to see all documentation
 */
const CountryIcon = ({
  countryCode = 'br',
  size = 18,
  ...rest
}: ICountryIconProps) => {
  const borderRadius = size * 0.2;
  const width = size * 1.3333;
  const height = size;

  return (
    <Span
      className={`fi fi-${countryCode}`}
      width={width}
      height={height}
      borderRadius={borderRadius}
      {...rest}
    />
  );
};

export { CountryIcon };
