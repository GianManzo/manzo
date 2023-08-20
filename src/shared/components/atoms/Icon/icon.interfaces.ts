import { IconWeight } from '@phosphor-icons/react';

export interface IconProps {
  iconName: IconNames;
  size?: number;
  weight?: IconWeight;
  color?: string;
}

export const iconTypes = {
  GIT: 'gitLogo',
  ARROW_DOWN: 'arrowDown',
};
export type IconNames = 'gitLogo' | 'arrowDown';
