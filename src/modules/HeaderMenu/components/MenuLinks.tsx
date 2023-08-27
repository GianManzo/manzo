import { Typography } from '@mui/material';
import { Container } from './menuLinks.styles';
import { useTranslation } from '@/shared/contexts/i18n/translation.context';

export const MenuLinks = () => {
  const { translate } = useTranslation();
  return (
    <Container>
      <Typography>{translate('headerMenu.home')}</Typography>
      <Typography>{translate('headerMenu.experiences')}</Typography>
      <Typography>{translate('headerMenu.projects')}</Typography>
      <Typography>{translate('headerMenu.resume')}</Typography>
    </Container>
  );
};
