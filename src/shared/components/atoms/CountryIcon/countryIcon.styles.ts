import theme from '@/shared/styles/themes/theme';
import styled from 'styled-components';

type SpanProps = {
  width: number;
  height: number;
  borderRadius: number;
};

export const Span = styled.span<SpanProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  min-width: ${props => props.width}px;
  min-height: ${props => props.height}px;
  border-radius: ${props => props.borderRadius}px;

  box-shadow: 0px 5px 7px ${theme.colors.fullColor};
`;
