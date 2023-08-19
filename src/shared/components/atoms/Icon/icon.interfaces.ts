import { IconWeight } from '@phosphor-icons/react';

export interface IconProps {
  iconName: IconNames;
  size?: number;
  weight?: IconWeight;
  color?: string;
}

export const iconTypes = {
  GIT: 'gitLogo',
};
export type IconNames = 'gitLogo';
