'use client';

import { useEffect } from 'react';
import { Button, Icon } from '../..';
import { Box, Tooltip } from '@mui/material';
import { CountryButton, MenuCountry } from './languageSelector.styles';
import { CountryIcon } from '../../atoms/CountryIcon';

import { useLanguageSelector } from './hooks/useLanguageSelector';
import { LanguageItem } from '../components/LanguageItem/LanguageItem';

export const LanguageSelector = () => {
  const {
    handleLanguageChange,
    getLanguageUser,
    handleOpenUserMenu,
    handleCloseUserMenu,
    languages,
    currentFlag,
    languageUserUser,
  } = useLanguageSelector();

  useEffect(() => {
    getLanguageUser();
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Escolha o idioma">
          <Button
            variant="text"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleOpenUserMenu}
          >
            <CountryButton>
              <CountryIcon countryCode={currentFlag} />
              <Icon iconName="arrowDown" color="#fff" />
            </CountryButton>
          </Button>
        </Tooltip>

        <MenuCountry
          sx={{ mt: '10px' }}
          anchorEl={languageUserUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(languageUserUser)}
          onClose={handleCloseUserMenu}
        >
          <Box
            className="language-menu-container"
            padding="8px"
            maxWidth="250px"
          >
            <LanguageItem
              currentFlag={currentFlag}
              handleLanguageChange={handleLanguageChange}
              languages={languages}
            />
          </Box>
        </MenuCountry>
      </Box>
    </div>
  );
};
