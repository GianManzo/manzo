import { createTheme } from '@mui/material/styles';
import theme from './theme';
import { lightBlue } from '@mui/material/colors';

export const materialTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary,
    },
    secondary: lightBlue,
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});
