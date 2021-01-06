import {css} from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import {ProjectTheme} from './conf';

// TODO: normalize.css
export const globalCSS = (theme: ProjectTheme) => css`
  ${emotionNormalize}
  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    color: ${theme.colors.text.body};
    background-color: ${theme.colors.bg.main};
    /* FIXME: consider */
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  html {
    font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
  }

  body {
    font-size: ${theme.fontSizes.body / 10}rem;
  }

  #app {
    width: 100%;
    height: auto;
    min-height: 100%;
    color: inherit;
    background-color: inherit;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }
`;
