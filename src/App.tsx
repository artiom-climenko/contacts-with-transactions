/** @jsxImportSource @emotion/react */
import { css, Global, useTheme } from '@emotion/react';
import React, { Suspense } from 'react';
import { Router } from './router';
import '../i18n';

function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        :root {
          --color-primary: #6d5bd0;
          --color-font-primary: #25213b;
          --color-font-primary-variant: #6e6893;
          --color-font-primary-icon: #8b83ba;
          --color-font-stroke: #c6c2de;
          --color-font-positive: #007f00;
          --color-font-negative: #d30000;
          --color-font-neutral: #965e00;
          --color-background-positive: #cdffcd;
          --color-background-negative: #ffe0e0;
          --color-background-neutral: #ffeccc;
          --color-background-primary: #ffffff;
          --color-background-parent: #f2f0f9;
          --color-background-stripe: #f4f2ff;
          --color-background-button: #ffffff;
          //
          --color-dark-primary: #6d5bd0;
          --color-dark-font-primary: #ffffff;
          --color-dark-font-primary-variant: #ffffff;
          --color-dark-font-primary-icon: #8b83ba;
          --color-dark-font-stroke: #6d5bd0;
          --color-dark-background-primary: #261d32;
          --color-dark-background-parent: #f2f0f9;
          --color-dark-background-stripe: #1a1125;
          --color-dark-background-button: #6d5bd0;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', sans-serif;
          background-color: ${theme.colorBackgroundStripe};
          transition-duration: 0.5s;
          transition-property: background-color, color;
        }
      `}
    />
  );
}

export interface IAppProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export function App({ isDark, setIsDark }: IAppProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router isDark={isDark} setIsDark={setIsDark} />
      <GlobalStyles />
    </Suspense>
  );
}
