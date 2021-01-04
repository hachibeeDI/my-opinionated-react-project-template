import {css} from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

import {ProjectTheme} from './theme';

// TODO: normalize.css
export const globalCSS = (theme: ProjectTheme) => css`
  ${emotionNormalize}
  /* FIXME: IE11 doesn't support CSS variable :( */
  /* FIXME: Use @emotion to declare global style */
  :root {
    --color-dark-bg: rgb(34, 37, 43);
    --color-text-white: rgb(252, 255, 226);

    --main-theme-color: #2cb5ba;
    --main-color: #212b36;
    --main-bg-color: #fff;
  }
  /*
  @media (prefers-color-scheme: dark) {
    :root {
      --main-theme-color: #2cb5ba;
      --main-color: rgb(252, 255, 226);
      --main-bg-color: var(--color-dark-bg);
    }
  }
  */

  @font-face {
    font-family: 'open moji black';
    font-weight: 400;
    font-style: normal;
    src: url('/dist/assets/OpenMoji-Black.ttf');
    font-display: swap;
  }

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
