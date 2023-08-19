'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import '@/shared/lib/i18n.config';

import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider as ThemeProviderSC,
} from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';

import GlobalStyles from '@/shared/styles/globals.styles';
import theme from '@/shared/styles/themes/theme';
import { materialTheme } from '../styles';

export default function Contexts({ children }: { children: React.ReactNode }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

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
