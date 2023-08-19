import { ButtonProps } from '@mui/material';

export interface IButton extends ButtonProps {
  children: string;
  textColor?: string;
}

export interface IMaterialButton {
  textColor?: string;
}
