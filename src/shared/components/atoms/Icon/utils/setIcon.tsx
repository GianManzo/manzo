import { CaretDown, GithubLogo, IconWeight } from '@phosphor-icons/react';
import { IconNames, iconTypes } from '../icon.interfaces';

export const setIcon = (
  iconName: IconNames,
  size?: number,
  weight?: IconWeight,
  color?: string,
) => {
  switch (iconName) {
    case iconTypes.GIT:
      return <GithubLogo color={color} weight={weight} size={size} />;
    case iconTypes.ARROW_DOWN:
      return <CaretDown color={color} weight={weight} size={size} />;
  }
};
