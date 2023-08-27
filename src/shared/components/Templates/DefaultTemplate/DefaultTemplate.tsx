import { HeaderMenu } from '@/modules';
import { DefaultTemplateContainer } from './defaultTemplate.styles';

export const DefaultTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <DefaultTemplateContainer>
      <HeaderMenu />
      {children}
    </DefaultTemplateContainer>
  );
};
