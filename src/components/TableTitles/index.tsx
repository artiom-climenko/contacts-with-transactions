import React from 'react';
import {
  MoreButton,
  Checkbox,
  ColumnTitle,
  TableTitlesWrapper,
} from './index.styles';
import { Icon, IconNames } from '../Icon';

export function TableTitles() {
  return (
    <TableTitlesWrapper>
      <Checkbox type="checkbox" />
      <ColumnTitle>Name</ColumnTitle>
      <ColumnTitle>User status</ColumnTitle>
      <ColumnTitle>Payment status</ColumnTitle>
      <ColumnTitle>Amount</ColumnTitle>
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
