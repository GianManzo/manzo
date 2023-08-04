import { poppins } from './fonts';
import { ITheme } from './theme.interfaces';

// styles/theme.js
const theme: ITheme = {
  colors: {
    primary: '#9765e9',
    backgroundPrimary: '#511ca6',
    fullColor: '#000000',
    strong: '#000',
    normal: '#000000CC',
    opaque: '#00000080',
    smoked: '#0000004D',
    almostSmoked: '#00000020',
    text: '#fff',
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

  fontFamily: {
    poppins: poppins.className,
  },

  fontWeight: {
    regular: '400',
    bold: '700',
  },
};

export default theme;
