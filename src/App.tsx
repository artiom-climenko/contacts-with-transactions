import { css, Global } from '@emotion/react';
import { Router } from './router';

let globalStyles = css`
  :root {
    --color-primary: #6d5bd0;
    --color-font-primary: #25213b;
    --color-font-primary-variant: #6e6893;
    --color-font-primary-icon: #8b83ba;
    --color-font-stroke: #c6c2de;
    --color-font-positive: #007f00;
    --color-font-negative: #d30000;
    --color-background-primary: #ffffff;
    --color-background-parent: #f2f0f9;
    --color-background-stripe: #f4f2ff;
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

  .ActiveTab {
    color: #25213b !important;
    border-bottom: 2px solid #25213b;
    opacity: 1 !important;
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
