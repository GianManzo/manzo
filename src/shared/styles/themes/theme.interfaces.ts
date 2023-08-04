export interface ITheme {
  colors: IColors;
  shadows: IShadows;
  fontSizes: IFontSize;
}

export interface IColors {
  primary: string;
  fullColor: string;
}

export interface IFontSize {
  rg: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

export interface IShadows {
  primary: string;
  full: string;
}
