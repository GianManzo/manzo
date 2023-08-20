import { ButtonProps } from '@mui/material';

export interface IButton extends ButtonProps {
  children: any;
  textColor?: string;
}

export interface IMaterialButton {
  textColor?: string;
}
