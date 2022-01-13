import React from 'react';
import {
  BreadcrumbButton,
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
      <BreadcrumbButton>
        <Icon
          icon={IconNames.breadcrumb}
          size={20}
          fill="var(--color-font-primary-icon)"
        />
      </BreadcrumbButton>
    </TableTitlesWrapper>
  );
}
