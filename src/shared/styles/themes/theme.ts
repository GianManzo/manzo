import { deepPurple } from '@mui/material/colors';
import { poppins, roboto } from './fonts';
import { ITheme } from './theme.interfaces';

const theme: ITheme = {
  colors: {
    primary: deepPurple[500],
    secondary: '#89b73a',
    fullColor: '#000000',
    text: '#fff',
    hover: '#18181d',
    grey: {
      '400': '#343333',
      '600': '#2F2D2D',
      '800': '#272626',
      '900': '#201F1F',
      full: '#151515',
    },
  },
  shadows: {
    full: '#1E1E1E',
    primary: '#311b92',
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
    roboto: roboto.className,
  },

  fontWeight: {
    regular: '400',
    bold: '700',
  },

  background: {
    primary: '#151515',
  },
};
export default theme;
