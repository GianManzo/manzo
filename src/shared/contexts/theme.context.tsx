'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import '@/shared/lib/i18n.config';

import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';

import GlobalStyles from '@/shared/styles/globals.styles';
import { materialTheme } from '../styles';

export default function ThemesContexts({
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

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <MaterialThemeProvider theme={materialTheme}>
        {children}
        <GlobalStyles />
      </MaterialThemeProvider>
    </StyleSheetManager>
  );
}
