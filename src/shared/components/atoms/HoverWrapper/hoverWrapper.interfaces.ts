import { ReactNode, HTMLAttributes } from 'react';

export type HoverWrapperVariants = 'scale' | 'background' | 'accentBackground';

export interface HoverWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  disableHoverEffect?: boolean;
  variant?: HoverWrapperVariants;
  borderRadius?: number;
  hovered?: boolean;
}
