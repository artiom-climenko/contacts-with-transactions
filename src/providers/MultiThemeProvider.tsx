import { css, Global } from '@emotion/react';
import React, { ReactNode, useContext, useState } from 'react';

export let AllColors = css`
  :root {
    --color-primary-day: #6d5bd0;
    --color-font-primary-day: #25213b;
    --color-font-primary-variant-day: #6e6893;
    --color-font-primary-icon-day: #8b83ba;
    --color-font-stroke-day: #c6c2de;
    --color-font-positive-day: #007f00;
    --color-font-negative-day: #d30000;
    --color-font-neutral-day: #965e00;
    --color-background-positive-day: #cdffcd;
    --color-background-negative-day: #ffe0e0;
    --color-background-neutral-day: #ffeccc;
    --color-background-primary-day: #ffffff;
    --color-background-parent-day: #f2f0f9;
    --color-background-stripe-day: #f4f2ff;

    --color-primary-night: #2f2f63;
    --color-font-primary-night: #ffffff;
    --color-font-primary-variant-night: #ffffff;
    --color-font-primary-icon-night: #beb9dd;
    --color-font-stroke-night: #6d5bd0;
    --color-font-positive-night: #007f00;
    --color-font-negative-night: #d30000;
    --color-font-neutral-night: #965e00;
    --color-background-positive-night: #cdffcd;
    --color-background-negative-night: #ffe0e0;
    --color-background-neutral-night: #ffeccc;
    --color-background-primary-night: #261d32;
    --color-background-parent-night: #919199;
    --color-background-stripe-night: #1a1125;
  }
`;

export let DayColors = css`
  :root {
    --color-primary: var(--color-primary-day);
    --color-font-primary: var(--color-font-primary-day);
    --color-font-primary-variant: var(--color-font-primary-variant-day);
    --color-font-primary-icon: var(--color-font-primary-icon-day);
    --color-font-stroke: var(--color-font-stroke-day);
    --color-font-positive: var(--color-font-positive-day);
    --color-font-negative: var(--color-font-negative-day);
    --color-font-neutral: var(--color-font-neutral-day);
    --color-background-positive: var(--color-background-positive-day);
    --color-background-negative: var(--color-background-negative-day);
    --color-background-neutral: var(--color-background-neutral-day);
    --color-background-primary: var(--color-background-primary-day);
    --color-background-parent: var(--color-background-parent-day);
    --color-background-stripe: var(--color-background-stripe-day);
  }
`;

export let NightColors = css`
  :root {
    --color-primary: var(--color-primary-night);
    --color-font-primary: var(--color-font-primary-night);
    --color-font-primary-variant: var(--color-font-primary-variant-night);
    --color-font-primary-icon: var(--color-font-primary-icon-night);
    --color-font-stroke: var(--color-font-stroke-night);
    --color-font-positive: var(--color-font-positive-night);
    --color-font-negative: var(--color-font-negative-night);
    --color-font-neutral: var(--color-font-neutral-night);
    --color-background-positive: var(--color-background-positive-night);
    --color-background-negative: var(--color-background-negative-night);
    --color-background-neutral: var(--color-background-neutral-night);
    --color-background-primary: var(--color-background-primary-night);
    --color-background-parent: var(--color-background-parent-night);
    --color-background-stripe: var(--color-background-stripe-night);
  }
`;

export interface IMultiThemeProviderContext {
  isDark: boolean;
  toggleTheme: () => void;
}

export let MultiThemeProviderContext =
  React.createContext<IMultiThemeProviderContext>({
    isDark: false,
    toggleTheme: () => {},
  });

export function useTheme() {
  let value = useContext(MultiThemeProviderContext);

  return value as IMultiThemeProviderContext;
}

export function MultiThemeProvider({ children }: { children: ReactNode }) {
  let [isDark, setDark] = useState(false);

  return (
    <>
      <MultiThemeProviderContext.Provider
        value={{
          isDark,
          toggleTheme: () => setDark((prev) => !prev),
        }}
      >
        {children}
        <Global styles={AllColors} />
        {isDark && <Global styles={NightColors} />}
        {!isDark && <Global styles={DayColors} />}
      </MultiThemeProviderContext.Provider>
    </>
  );
}
