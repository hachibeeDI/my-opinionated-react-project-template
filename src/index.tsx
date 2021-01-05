import '~/bootstrap';

import React, {Suspense} from 'react';
import {render} from 'react-dom';
import {useTranslation} from 'react-i18next';

import ThemeProvider from './theme/provider';

import PageA from '~/pages/pageA';

if (process.env.NODE_ENV !== 'production') {
  console.log(`Starting roject as ${process.env.NODE_ENV} mode.`);
}

function Main(props: unknown) {
  const {t} = useTranslation(['commons']);
  return (
    <Suspense fallback="loading...">
      <main>
        <h1>{t('project-title')}</h1>
        <PageA />
      </main>
    </Suspense>
  );
}

render(
  <ThemeProvider>
    <Main />
  </ThemeProvider>,
  document.getElementById('app'),
);
