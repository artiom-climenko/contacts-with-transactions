import React from 'react';
import { LanguagesChangeButton, Title, TitleWrapper } from './index.styles';
import { useTranslation } from 'react-i18next';
import { ThemeChangeButton } from '../ThemeChangeButton';
import { IAppProps } from '../../App';

export function PageTitle({ isDark, setIsDark }: IAppProps) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <TitleWrapper>
      <Title>{t('title')}</Title>
      <div>
        <ThemeChangeButton isDark={isDark} setIsDark={setIsDark} />
        <LanguagesChangeButton onClick={() => changeLanguage('en')}>
          EN
        </LanguagesChangeButton>
        <LanguagesChangeButton onClick={() => changeLanguage('ru')}>
          RU
        </LanguagesChangeButton>
      </div>
    </TitleWrapper>
  );
}
