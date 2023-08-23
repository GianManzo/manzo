import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

import { HoverWrapperProps } from './hoverWrapper.interfaces';

export const Container = styled.div<HoverWrapperProps>`
  transition: all 0.3s;
  border: none;
  background: none;
  outline: none;
  cursor: ${({ disableHoverEffect }) =>
    !disableHoverEffect ? 'pointer' : 'default'};
  border-radius: ${({ borderRadius }) => borderRadius}px;

  background-color: ${props => {
    const { variant, theme, hovered } = props;

    if (hovered)
      switch (variant) {
        case 'accentBackground':
          return transparentize(0.6, theme.colors.primary);

        case 'background':
          return transparentize(0.3, theme.colors.hover);

        default:
          break;
      }
  }};

  ${({ variant, disableHoverEffect, theme }) => {
    if (!disableHoverEffect)
      return css`
        &:hover {
          ${() => {
            switch (variant) {
              case 'background':
                return css`
                  background-color: ${theme.colors.hover};
                `;

              case 'accentBackground':
                return css`
                  background-color: ${transparentize(
                    0.4,
                    theme.colors.primary,
                  )};
                `;

              default:
                return css`
                  opacity: 0.7;
                `;
            }
          }}
        }
      `;
  }}
`;
