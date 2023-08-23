import { HoverWrapperProps } from './hoverWrapper.interfaces';
import { Container } from './hoverWrapper.styles';

function HoverWrapper({
  children,
  variant = 'scale',
  borderRadius = 0,
  disableHoverEffect = false,
  hovered = false,
  ...rest
}: HoverWrapperProps) {
  return (
    <Container
      hovered={hovered}
      variant={variant}
      disableHoverEffect={disableHoverEffect}
      borderRadius={borderRadius}
      aria-label="Hover wrapper"
      {...rest}
    >
      {children}
    </Container>
  );
}

export { HoverWrapper };
