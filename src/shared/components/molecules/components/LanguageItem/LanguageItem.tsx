import { HoverWrapper } from '@/shared/components/atoms/HoverWrapper';
import { Box, Typography } from '@mui/material';
import { LanguageButton } from '../../LanguageSelector/languageSelector.styles';
import { CountryIcon, LanguageItemProps } from '@/shared/components';
import theme from '@/shared/styles/themes/theme';
import { useTranslation } from '@/shared/contexts/i18n/translation.context';

export const LanguageItem = ({
  languages,
  handleLanguageChange,
}: LanguageItemProps) => {
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
    </>
  );
};
