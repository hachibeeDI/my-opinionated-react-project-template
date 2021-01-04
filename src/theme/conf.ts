/**
 * TODO:
 *   Template String Type will be able to generate type safe props from theme definition:
 *   i.e.
 *   ```
 *   const size = createPropertyWithAlias([1, 2] as const, (v) => ({a: '', b: ''}));
 *   type SizeProps = PropTypeBuilder<typeof size>;  // => 1 | 2 | 'a' | 'b';
 *   ```
 */

import {Theme} from 'styled-system';

import {lightColors, darkColors} from './colors';
import {createPropertyWithAlias} from './_utils';

const shadows: Theme['shadows'] = ['0px 0px 8px rgba(0, 0, 0, 0.05)'];

const borders = createPropertyWithAlias([`1px solid ${(props: any) => props.theme.colors.border}`] as const, (v) => ({
  normal: v[0],
}));

const space = createPropertyWithAlias([0, 4, 8, 16, 32, 64, 128, 256, 512] as const, (v) => ({
  none: v[0],
  minimum: v[1],
  small: v[2],
  medium: v[3],
  large: v[4],
}));

const sizes = createPropertyWithAlias([18, 36, 44, 120] as const, (v) => ({
  smallAvatar: v[1], // 36
  mediumAvatar: v[2], // 44
  largeAvatar: v[3], // 120

  /** poor naming :sob: */
  normalHeight: v[2],
  appHeader: 80,
}));

const fontSizes = createPropertyWithAlias([8, 12, 14, 16, 20, 24, 32, 48, 64, 72] as const, (v) => ({
  body: v[2],
  emphasis: v[3],
  title: v[5],
  button: v[2],

  small: v[0],
  medium: v[2],
  large: v[3],
}));

const themeBase = {
  space,
  /**
   * https://styled-system.com/getting-started/#layout
   */
  sizes,
  /** TODO: hmm...??? */
  lineHeights: sizes,
  fontSizes,
  shadows,
  borders,
  radii: {small: 2, medium: 4, round: '50%'},
};

type ThemeOverride = typeof themeBase & typeof lightColors;

export type ProjectTheme = Exclude<Theme, keyof ThemeOverride> & ThemeOverride;
export default {
  light: {...themeBase, ...lightColors},
  dark: {...themeBase, ...darkColors},
};
