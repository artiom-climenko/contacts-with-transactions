import { css, Global } from '@emotion/react';
import { Router } from './router';

let globalStyles = css`
  :root {
    --color-background: #f2f0f9;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--color-background);
    font-family: 'Inter', sans-serif;
  }
`;

export function App() {
  return (
    <>
      <Router />
      <Global styles={globalStyles} />
    </>
  );
}
