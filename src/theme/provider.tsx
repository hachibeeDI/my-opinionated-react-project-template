import React, {ReactChild, useEffect, useState} from 'react';
import {ThemeProvider, Global} from '@emotion/react';

import theme from './conf';
import {globalCSS} from './globalStyle';

const _SCHEMA_MARK = window.matchMedia('(prefers-color-scheme: dark)');
const _IS_DARK_MODE = _SCHEMA_MARK.matches;

export default function TProvider(props: {children: ReactChild}) {
  const [isDarkMode, setColorMode] = useState(_IS_DARK_MODE);
  useEffect(() => {
    console.log(`dark mode = ${_IS_DARK_MODE}`);
    const handleSchemaChange = (event: MediaQueryListEvent) => setColorMode(event.matches);
    _SCHEMA_MARK.addEventListener('change', handleSchemaChange);
    return () => _SCHEMA_MARK.removeEventListener('change', handleSchemaChange);
  }, []);
  return (
    <ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>
      <Global styles={globalCSS} />
      {props.children}
    </ThemeProvider>
  );
}
