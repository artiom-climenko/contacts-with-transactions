import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ThemeProvider } from '@emotion/react';

export const themeLight = {
  colorPrimary: 'var(--color-primary)',
  colorFontPrimary: 'var(--color-font-primary)',
  colorFontPrimaryVariant: 'var(--color-font-primary-variant)',
  colorFontPrimaryIcon: 'var(--color-font-primary-icon)',
  colorFontStroke: 'var(--color-font-stroke)',
  colorBackgroundPrimary: 'var(--color-background-primary)',
  colorBackgroundParent: 'var(--color-background-parent)',
  colorBackgroundStripe: 'var(--color-background-stripe)',
  colorBackgroundButton: 'var(--color-background-button)',
};

export const themeDark = {
  colorPrimary: 'var(--color-dark-primary)',
  colorFontPrimary: 'var(--color-dark-font-primary)',
  colorFontPrimaryVariant: 'var(--color-dark-font-primary-variant)',
  colorFontPrimaryIcon: 'var(--color-dark-font-primary-icon)',
  colorFontStroke: 'var(--color-dark-font-stroke)',
  colorBackgroundPrimary: 'var(--color-dark-background-primary)',
  colorBackgroundParent: 'var(--color-dark-background-parent)',
  colorBackgroundStripe: 'var(--color-dark-background-stripe)',
  colorBackgroundButton: 'var(--color-dark-background-button)',
};

function Main() {
  const [isDark, setIsDark] = useState(false);
  return (
    <React.StrictMode>
      <ThemeProvider theme={isDark ? themeDark : themeLight}>
        <App isDark={isDark} setIsDark={setIsDark} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
