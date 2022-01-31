import React from 'react';
import { Button, ButtonText } from './index.styles';
import { Icon, IconNames } from '../Icon';
import { useTranslation } from 'react-i18next';

export function FilterButton() {
  const { t } = useTranslation();

  return (
    <Button>
      <Icon
        icon={IconNames.filter}
        size={20}
        fill="var(--color-font-primary-icon)"
      />
      <ButtonText>{t('filterButton')}</ButtonText>
    </Button>
  );
}
