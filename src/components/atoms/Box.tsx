import React, {ReactNode} from 'react';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  space,
  color,
  shadow,
  border,
  layout,
  compose,
  flexbox,
  TypographyProps,
  SpaceProps,
  ShadowProps,
  BorderProps,
  LayoutProps,
  FlexboxProps,
  typography,
  ColorProps,
} from 'styled-system';

const BoxInner = styled('div', {shouldForwardProp})(
  {
    boxSizing: 'border-box',
  },
  compose(typography, space, color, shadow, border, layout, flexbox),
);

type Props = {children: ReactNode} & TypographyProps & SpaceProps & ShadowProps & BorderProps & LayoutProps & FlexboxProps & ColorProps;

/**
 * サンプルのAtom。styled-systemでみんな作るであろう一般的な汎用Boxコンポーネント
 * ちなみにここのコメントもStyleguidist上で閲覧できる。
 */
export default function Box(props: Readonly<Props>) {
  return <BoxInner {...props} />;
}
