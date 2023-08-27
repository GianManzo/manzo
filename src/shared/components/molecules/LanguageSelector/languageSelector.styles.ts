import { Menu } from '@mui/material';
import styled from 'styled-components';

export const LanguageButton = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  .language-button-left {
    display: flex;
    align-items: center;
  }
`;

export const CountryButton = styled.div`
  position: relative;
  padding-right: 16px;
  display: flex !important;
  align-items: center;
  gap: 0.5rem;
`;

export const MenuCountry = styled(Menu)`
  .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper {
    background-color: #393838;
  }
`;
