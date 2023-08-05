'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';

import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider as ThemeProviderSC,
} from 'styled-components';
import {
  ThemeProvider as MaterialThemeProvider,
  createTheme,
} from '@mui/material/styles';

import GlobalStyles from '@/shared/styles/globals.styles';
import theme from '@/shared/styles/themes/theme';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  const materialTheme = createTheme({
    palette: {
      primary: {
        main: theme.colors.primary,
      },
      secondary: {
        main: theme.colors.backgroundPrimary,
      },
    },
    typography: {
      button: {
        textTransform: 'none',
      },
    },
  });

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProviderSC theme={theme}>
        <MaterialThemeProvider theme={materialTheme}>
          {children}
          <GlobalStyles />
        </MaterialThemeProvider>
      </ThemeProviderSC>
    </StyleSheetManager>
  );
}
