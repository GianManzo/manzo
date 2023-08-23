import { ICountryIconProps } from './countryIcon.interfaces';
import { Span } from './countryIcon.styles';

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
