/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import React from 'react';
import { ChangeButton } from './index.styles';
import { IAppProps } from '../../App';
import { useTranslation } from 'react-i18next';

export function ThemeChangeButton({ isDark, setIsDark }: IAppProps) {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <ChangeButton
      onClick={() => {
        setIsDark(!isDark);
      }}
      css={css`
        color: ${theme.colorFontPrimary};
        background-color: ${theme.colorBackgroundButton};
      `}
    >
      {t('multiDark.changeTo')}{' '}
      {isDark ? t('multiDark.light') : t('multiDark.dark')}{' '}
      {t('multiDark.mode')}
    </ChangeButton>
  );
}
