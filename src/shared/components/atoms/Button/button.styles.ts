import styled from 'styled-components';
import { Button } from '@mui/material';
import { IMaterialButton } from './button.interfaces';

export const MaterialButton = styled(Button)<IMaterialButton>`
  color: ${props => props.textColor};
`;
