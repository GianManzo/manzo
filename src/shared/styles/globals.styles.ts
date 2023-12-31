import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-poppins);
    font-weight: 400;
  };

  ::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  backdrop-filter: blur(120px);
  -webkit-backdrop-filter: blur(120px);
}
::-webkit-scrollbar-thumb {
  background-color: ${props => props.theme.colors.backgroundPrimary};
  border-radius: 5px;
}

::selection {
  color: #050505;
  background-color: ${props => props.theme.colors.primary};
}

body {
    -webkit-font-smoothing: "antialiassed";
    background: ${props => props.theme.background.primary};
    color:${props => props.theme.colors.text};
};

`;

export default GlobalStyles;
