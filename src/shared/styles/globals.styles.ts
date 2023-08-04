import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    -webkit-font-smoothing: "antialiassed";
    background: ${props => props.theme.colors.fullColor};
  };

  body, input, textarea, button {
    font-family: "Roboto";
    font-weight: 400;
  }
`;

export default GlobalStyles;
