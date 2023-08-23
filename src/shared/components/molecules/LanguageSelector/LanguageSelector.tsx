'use client';

import { useTranslation } from '@/shared/contexts/i18n/translation.context';
import { useEffect, useState } from 'react';
import { Button, Icon } from '../..';
import { Box, Tooltip, Typography } from '@mui/material';
import {
  CountryButton,
  LanguageButton,
  MenuCountry,
} from './languageSelector.styles';
import { CountryIcon } from '../../atoms/CountryIcon';
import { ISO_COUNTRY_CODES } from '@/shared/translations/constants';
import theme from '@/shared/styles/themes/theme';
import { HoverWrapper } from '../../atoms/HoverWrapper';

export const LanguageSelector = () => {
  const { changeLanguage, language, translate } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [currentFlag, setCurrentFlag] = useState('br');
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const languages = Object.values(ISO_COUNTRY_CODES).map(locale => ({
    id: locale,
    countryCode: locale,
  }));

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    let targetFlag = currentFlag;

    if (savedLanguage === 'pt') {
      targetFlag = 'br';
    } else if (savedLanguage === 'en') {
      targetFlag = 'us';
    } else {
      targetFlag = savedLanguage as string;
    }

    if (savedLanguage && savedLanguage !== currentLanguage) {
      setCurrentFlag(targetFlag);
      setCurrentLanguage(savedLanguage);
      changeLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (newLanguage: string) => {
    let targetLanguage = currentLanguage;
    let targetFlag = currentFlag;

    if (newLanguage === 'br') {
      targetLanguage = 'pt';
      targetFlag = newLanguage;
    } else if (newLanguage === 'us') {
      targetLanguage = 'en';
      targetFlag = newLanguage;
    } else {
      targetFlag = newLanguage;
      targetLanguage = newLanguage;
    }

    if (newLanguage !== currentLanguage) {
      localStorage.setItem('language', targetLanguage);
      changeLanguage(targetLanguage);
      setCurrentLanguage(targetLanguage);
      setCurrentFlag(targetFlag);
      setAnchorElUser(null);
    }
  };

  return (
    <>
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
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Box
              className="language-menu-container"
              padding="8px"
              maxWidth="250px"
            >
              {languages.map(
                flag =>
                  flag && (
                    <>
                      <Box position="relative" key={flag.id}>
                        <HoverWrapper
                          borderRadius={8}
                          onClick={() => handleLanguageChange(flag.countryCode)}
                          variant="background"
                          key={flag.id}
                          style={{
                            padding: 8,
                          }}
                        >
                          <LanguageButton>
                            <Box className="language-button-left">
                              <CountryIcon countryCode={flag.countryCode} />
                              <Typography
                                color={theme.colors.text}
                                style={{ marginLeft: 8 }}
                              >
                                {translate(`languages.${flag.countryCode}`)}
                              </Typography>
                            </Box>
                          </LanguageButton>
                        </HoverWrapper>
                      </Box>
                    </>
                  ),
              )}
            </Box>
          </MenuCountry>
        </Box>
      </div>
    </>
  );
};
