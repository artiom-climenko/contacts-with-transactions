import React, { useCallback } from 'react';
import { LanguagesChangeButton, Title, TitleWrapper } from './index.styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../providers';

export function PageTitle() {
  const { t, i18n } = useTranslation();

  let handleChangeLanguage = useCallback(
    (language: string) => {
      i18n.changeLanguage(language).then((t) => {
        t('key');
      });
    },
    [i18n],
  );

  let { toggleTheme } = useTheme();

  return (
    <TitleWrapper>
      <Title>{t('title')}</Title>
      <div>
        <LanguagesChangeButton onClick={() => handleChangeLanguage('en')}>
          EN
        </LanguagesChangeButton>
        <LanguagesChangeButton onClick={() => handleChangeLanguage('ru')}>
          RU
        </LanguagesChangeButton>
        <LanguagesChangeButton onClick={() => toggleTheme()}>
          {t('changeTheme')}
        </LanguagesChangeButton>
      </div>
    </TitleWrapper>
  );
}
