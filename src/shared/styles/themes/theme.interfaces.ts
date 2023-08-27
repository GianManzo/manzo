export interface ITheme {
  colors: IColors;
  shadows: IShadows;
  fontSizes: IFontSize;
  fontFamily: IFont;
  fontWeight: IFontWeight;
  background: IBackground;
}
export type IGrey = {
  full: string;
  '400': string;
  '600': string;
  '800': string;
  '900': string;
};

export interface IBackground {
  primary: string;
  secondary: string;
}

export interface IFontWeight {
  regular: '400';
  bold: '700';
}

export interface IColors {
  hover: string;
  primary: string;
  secondary: string;
  fullColor: string;
  text: string;
  grey: IGrey;
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
