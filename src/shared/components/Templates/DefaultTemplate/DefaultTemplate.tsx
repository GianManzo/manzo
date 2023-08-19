import { LanguageSelector } from '../..';

export const DefaultTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <LanguageSelector />
      {children}
    </>
  );
};
