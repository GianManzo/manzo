import { ITheme } from './theme.interfaces';

// styles/theme.js
const dark: ITheme = {
  colors: {
    primary: '#8C59DF',
    fullColor: '#212121',
  },
  shadows: {
    full: 'rgba(0, 0, 0, 0.512)',
    primary: 'hsl(263,59%,35%)',
  },

  fontSizes: {
    rg: '1rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.5rem',
    xxl: '2rem',
  },
};

export default dark;
