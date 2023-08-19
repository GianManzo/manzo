'use client';

import { IButton } from './button.interfaces';
import { MaterialButton } from './button.styles';

export const Button = ({ children, textColor, ...rest }: IButton) => {
  return (
    <MaterialButton className="materialButton" textColor={textColor} {...rest}>
      {children}
    </MaterialButton>
  );
};
