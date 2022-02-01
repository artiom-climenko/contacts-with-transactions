import { css, Global } from '@emotion/react';
import React, { Suspense } from 'react';
import { Router } from './router';
import '../i18n';
import { MultiThemeProvider } from './providers';

let globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--color-background-stripe);
    font-family: 'Inter', sans-serif;
  }
`;

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MultiThemeProvider>
        <Router />
      </MultiThemeProvider>
      <Global styles={globalStyles} />
    </Suspense>
  );
}
