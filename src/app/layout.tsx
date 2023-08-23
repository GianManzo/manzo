'use client';

import { poppins, roboto } from '@/shared/styles/themes/fonts';
import { TranslationProvider } from '@/shared/contexts/i18n/translation.context';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import { ThemeProvider } from 'styled-components';
import theme from '@/shared/styles/themes/theme';
import ThemesContexts from '@/shared/contexts/theme.context';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable} `}>
      <body>
        <ThemeProvider theme={theme}>
          <ThemesContexts>
            <TranslationProvider>{children}</TranslationProvider>
          </ThemesContexts>
        </ThemeProvider>
      </body>
    </html>
  );
}
