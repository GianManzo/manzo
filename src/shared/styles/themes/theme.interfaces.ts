export interface ITheme {
  colors: IColors;
  shadows: IShadows;
  fontSizes: IFontSize;
  fontFamily: IFont;
  fontWeight: IFontWeight;
}

export interface IFontWeight {
  regular: '400';
  bold: '700';
}

export interface IColors {
  primary: string;
  fullColor: string;
  strong: string;
  normal: string;
  opaque: string;
  smoked: string;
  almostSmoked: string;
  text: string;
  backgroundPrimary: string;
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

export interface IFont {
  poppins: string;
  roboto: string;
}
