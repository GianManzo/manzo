import { poppins, roboto } from '@/shared/styles/themes/fonts';
import ThemeProvider from './lib/registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable} `}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
