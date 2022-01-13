import React from 'react';
import {
  Amount,
  Checkbox,
  CheckboxAndCollapseWrapper,
  CollapseButton,
  ContactWrapper,
  Currency,
  Email,
  LastLogin,
  Name,
  PaymentDescription,
  Status,
  TableColumn,
  ViewMore,
  ViewMoreAndBreadcrumbsWrapper,
} from './index.styles';
import { BreadcrumbButton } from '../TableTitles/index.styles';
import { Icon, IconNames } from '../Icon';

export function SingleContact() {
  return (
    <ContactWrapper>
      <CheckboxAndCollapseWrapper>
        <Checkbox type="checkbox" />
        <CollapseButton>
          <Icon
            icon={IconNames.arrowDown}
            size={15}
            fill="var(--color-font-primary-icon)"
          />
        </CollapseButton>
      </CheckboxAndCollapseWrapper>
      <TableColumn>
        <Name>Justin Septimus</Name>
        <Email href="mailto:example@email.com" target="_blank">
          example@email.com
        </Email>
      </TableColumn>
      <TableColumn>
        <Status>Active</Status>
        <LastLogin>Last login: 14/APR/2020</LastLogin>
      </TableColumn>
      <TableColumn>
        <Status>Paid</Status>
        <PaymentDescription>Paid on 15/APR/2020</PaymentDescription>
      </TableColumn>
      <TableColumn>
        <Amount>$200</Amount>
        <Currency>USD</Currency>
      </TableColumn>
      <ViewMoreAndBreadcrumbsWrapper>
        <ViewMore>View More</ViewMore>
        <BreadcrumbButton>
          <Icon
            icon={IconNames.breadcrumb}
            size={20}
            fill="var(--color-font-primary-icon)"
          />
        </BreadcrumbButton>
      </ViewMoreAndBreadcrumbsWrapper>
    </ContactWrapper>
  );
}
