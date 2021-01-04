/**
 * Name of colors are based on:
 *   https://www.htmlcsscolor.com/hex/
 */

const palette = {
  white: '#FFFFFF',
  midnight: '#212B36',
  goldenTainoi: '#FFC652',
  creamCan: '#F8C646',
  violetRed: '#EC407A',
  blueCharcoal: '#1E2227',

  //'#A6AAAF'
  azure: '#FAFBFB',
  greyChateau: '#95999E',
  heather: '#B8BBBF',
  slateGrey: '#7A8086',
  brightGrey: '#4D555E',
  solitude: '#ECEDF0',
  // FIXME: should not use alfa
  grey: 'rgba(33, 43, 54, 0.15)',
  caribbeanGreen: '#1AD5A8',
  easyGreen: '#2CB5BA',
};

export const lightColors = {
  // TODO: "Template String Type" which will be released with 4.1 gonna make `ColorProps` type safe.
  colors: {
    primary: palette.easyGreen,
    text: {
      emphasis: palette.midnight,
      body: palette.brightGrey,
      hint: palette.slateGrey,
      placeholder: palette.heather,
    },
    bg: {
      main: palette.white,
      lightAccent: palette.azure,
    },
    status: {
      ok: palette.caribbeanGreen,
      caution: palette.creamCan,
    },
    error: palette.violetRed,
    border: palette.solitude,
  },

  colorsAgainst: {
    primary: palette.white,
    text: palette.white,
  },
};

export const darkColors: typeof lightColors = {
  colors: {
    primary: palette.easyGreen,
    text: {
      emphasis: palette.white,
      body: palette.white,
      hint: palette.slateGrey,
      placeholder: palette.heather,
    },
    bg: {
      main: palette.blueCharcoal,
      lightAccent: palette.azure,
    },
    status: {
      ok: palette.caribbeanGreen,
      caution: palette.creamCan,
    },
    error: palette.violetRed,
    border: palette.solitude,
  },

  colorsAgainst: {
    primary: palette.white,
    text: palette.blueCharcoal,
  },
};
