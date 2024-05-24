import {
  BackgroundColorProps,
  BorderProps,
  SpacingProps,
  backgroundColor,
  border,
  composeRestyleFunctions,
  createTheme,
  spacing,
} from '@shopify/restyle';

export const FontFamilyRoboto = {
  REGULAR: 'Roboto-Regular',
  BOLD: 'Roboto-Bold',
  BOLD_ITALIC: 'Roboto-BoldItalic',
  BLACK: 'Roboto-Black',
  BLACK_ITALIC: 'Roboto-BlackItalic',
  ITALIC: 'Roboto-Italic',
  LIGHT: 'Roboto-Light',
  LIGHT_ITALIC: 'Roboto-LightItalic',
  MEDIUM: 'Roboto-Medium',
  MEDIUM_ITALIC: 'Roboto-MediumItalic',
  THIN: 'Roboto-Thin',
  THIN_ITALIC: 'Roboto-ThinItalic',
};

export const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',

  transparent: 'transparent',

  blue: '#3870FF',
  primaryText: '#273156',
  secondaryText: '#213554de',
  disableBackground: '#3246641f',
  disableText: '#3246645c',
  bgwhite: '#f6faff',
  line: '#E6EBF3',
  lineText: '#213554ab',
  btnBorder: '#1566f180',
  btnText: '#1566F1',
  textInputBorder: '#528FF066',
  boxShadow: 'rgba(46, 64, 76, 0.6)',
  text: '#213554',
  pureWhite: '#fff',
  placeHolderText: '#21355461',
  lightText: '#162F5661',
  basicText: '#162F56',
  primaryBackground: '#1566F133',
  subHeader: '#162F56BD',
  background: '#FDFDFD',
  cardBgBlue: '#111B33',
  primaryLight: '#5CA2F7',
  borderColor: '#2B83EA',
  silver: '#C4CBD7',
  shade: '#5d6d8614',
  borderLightColor: '#152d4b33',
  textInputPlaceholder: '#8B96A661',
};

const theme = createTheme({
  colors: palette,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  spacing: {
    xs: 4,
    s: 8,
    sm: 12,
    sl: 14,
    m: 16,
    mx: 20,
    l: 24,
    xl: 40,
  },
  margin: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  border: {},
  borderRadii: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    defaults: {
      fontFamily: FontFamilyRoboto.REGULAR,
      fontSize: 16,
    },
    header: {
      fontSize: 20,
      lineHeight: 22,
      color: 'primaryText',
      textAlign: 'center',
      fontFamily: FontFamilyRoboto.BOLD,
    },
    subHeader: {
      fontSize: 16,
      lineHeight: 22,
      color: 'secondaryText',
      textAlign: 'center',
      opacity: 0.6,
    },
    plainText: {
      fontSize: 14,
      lineHeight: 20,
      color: 'primaryText',
      textAlign: 'left',
      fontFamily: FontFamilyRoboto.REGULAR,
    },
    headerText: {
      fontSize: 16,
      lineHeight: 22.5,
      color: 'primaryText',
      textAlign: 'center',
      fontFamily: FontFamilyRoboto.BOLD,
    },
    body: {
      fontSize: 12,
      textAlign: 'center',
      color: 'lineText',
    },
    lightText: {
      fontSize: 12,
      textAlign: 'left',
      color: 'lightText',
      lineHeight: 18,
    },
    basicText: {
      fontSize: 12,
      textAlign: 'left',
      color: 'basicText',
      lineHeight: 18,
    },
    basicHeaderText: {
      fontSize: 16,
      textAlign: 'left',
      color: 'btnText',
      lineHeight: 30,
      fontFamily: FontFamilyRoboto.BOLD,
    },
    basicTextBold: {
      fontSize: 14,
      textAlign: 'left',
      color: 'basicText',
      lineHeight: 18,
      fontFamily: FontFamilyRoboto.BOLD,
    },
    blueText: {
      color: 'btnText',
      paddingHorizontal: 'mx',
      paddingVertical: 'sm',
      fontSize: 14,
      fontFamily: FontFamilyRoboto.BOLD,
    },
    button_primary: {
      textAlign: 'center',
      color: 'pureWhite',
      fontSize: 14,
      lineHeight: 20,
      fontFamily: FontFamilyRoboto.BOLD,
    },
    button_outlined: {
      textAlign: 'center',
      color: 'btnText',
      fontSize: 12,
      //   lineHeight: 20,
      fontFamily: FontFamilyRoboto.BOLD,
    },
    button_disabled: {
      textAlign: 'center',
      color: 'disableText',
      fontSize: 14,
      lineHeight: 20,
      fontFamily: FontFamilyRoboto.BOLD,
    },
  },
  buttonVariants: {
    defaults: {
      height: 44,
      borderRadius: 's',
    },
    primary: {
      backgroundColor: 'btnText',
    },
  },
  cardVariants: {
    defaults: {
      shadowColor: 'boxShadow',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 3,
      backgroundColor: 'pureWhite',
    },
  },
});

export type Theme = typeof theme;

export type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme>;

export const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
]);

export default theme;
