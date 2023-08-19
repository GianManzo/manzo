import { poppins, roboto } from '@/shared/styles/themes/fonts';
import Contexts from '../shared/contexts/context';
import { TranslationProvider } from '@/shared/contexts/i18n/translation.context';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable} `}>
      <body>
        <Contexts>
          <TranslationProvider>{children}</TranslationProvider>
        </Contexts>
      </body>
    </html>
  );
}
