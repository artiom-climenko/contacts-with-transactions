import React from 'react';
import { IconWrapper, SearchFieldWrapper, SearchInput } from './index.styles';
import { Icon, IconNames } from '../Icon';
import { useTranslation } from 'react-i18next';

export function SearchField() {
  const { t } = useTranslation();

  return (
    <SearchFieldWrapper>
      <IconWrapper>
        <Icon
          icon={IconNames.search}
          size={20}
          fill="var(--color-font-primary-icon)"
        />
      </IconWrapper>
      <SearchInput type="search" placeholder={t('searchField')} />
    </SearchFieldWrapper>
  );
}
