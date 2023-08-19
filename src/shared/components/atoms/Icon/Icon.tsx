'use client';

import { setIcon } from './utils/setIcon';
import { IconProps } from './icon.interfaces';

export const Icon = ({ iconName, size, weight, color }: IconProps) => {
  return setIcon(iconName, size, weight, color);
};
