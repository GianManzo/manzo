import { Box, Typography } from '@mui/material';
import { LanguageButton } from '../../LanguageSelector/languageSelector.styles';
import { CountryIcon, LanguageItemProps } from '@/shared/components';
import theme from '@/shared/styles/themes/theme';
import { useTranslation } from '@/shared/contexts/i18n/translation.context';
import { HoverWrapper } from '@/shared/components/atoms/HoverWrapper';
import { useEffect, useState } from 'react';

export const LanguageItem = ({
  languages,
  currentFlag,
  handleLanguageChange,
}: LanguageItemProps) => {
  const [selectedFlagId, setSelectedFlagId] = useState(currentFlag);

  useEffect(() => {
    setSelectedFlagId(currentFlag);
  }, [currentFlag]);

  const handleLanguageItemClick = (countryCode: string) => {
    setSelectedFlagId(countryCode);
    handleLanguageChange(countryCode);
  };

  const { translate } = useTranslation();
  return (
    <>
      {languages.map(
        flag =>
          flag && (
            <>
              <Box position="relative" key={flag.id}>
                <HoverWrapper
                  borderRadius={8}
                  onClick={() => handleLanguageItemClick(flag.countryCode)}
                  variant="background"
                  key={flag.id}
                  style={{
                    padding: 8,
                    background: `${
                      selectedFlagId === flag.id ? theme.colors.hover : ''
                    }`,
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
    </>
  );
};
