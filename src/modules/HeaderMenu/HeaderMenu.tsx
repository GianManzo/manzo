import { LanguageSelector } from '@/shared/components';
import Logo from '../../assets/logo.svg';
import Image from 'next/image';
import { HeaderMenuContainer } from './headerMenu.styles';
import { Typography } from '@mui/material';
import { MenuLinks } from './components/MenuLinks';

export const HeaderMenu = () => {
  return (
    <HeaderMenuContainer>
      <Image style={{ marginLeft: '1.5rem' }} src={Logo} alt="Logo" />
      <MenuLinks />
      <LanguageSelector />
    </HeaderMenuContainer>
  );
};
