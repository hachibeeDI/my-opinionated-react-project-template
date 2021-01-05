import '~/bootstrap';

import * as React from 'react';
import {render} from 'react-dom';
import {useTranslation} from 'react-i18next';

import ThemeProvider from './theme/provider';

if (process.env.NODE_ENV !== 'production') {
  console.log(`Starting roject as ${process.env.NODE_ENV} mode.`);
}

function Main(props: unknown) {
  const {t} = useTranslation(['commons']);
  return (
    <main>
      <h1>{t('project-title')}</h1>
    </main>
  );
}

render(
  <ThemeProvider>
    <Main />
  </ThemeProvider>,
  document.getElementById('app'),
);
