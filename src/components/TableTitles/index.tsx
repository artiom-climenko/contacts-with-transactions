import React from 'react';
import {
  MoreButton,
  Checkbox,
  ColumnTitle,
  TableTitlesWrapper,
} from './index.styles';
import { Icon, IconNames } from '../Icon';
import { useTranslation } from 'react-i18next';

export function TableTitles() {
  const { t } = useTranslation();

  return (
    <TableTitlesWrapper>
      <Checkbox type="checkbox" />
      <ColumnTitle>{t('tableTitles.name')}</ColumnTitle>
      <ColumnTitle>{t('tableTitles.userStatus')}</ColumnTitle>
      <ColumnTitle>{t('tableTitles.paymentStatus')}</ColumnTitle>
      <ColumnTitle>{t('tableTitles.amount')}</ColumnTitle>
      <MoreButton>
        <Icon
          icon={IconNames.breadcrumb}
          size={20}
          fill="var(--color-font-primary-icon)"
        />
      </MoreButton>
    </TableTitlesWrapper>
  );
}
