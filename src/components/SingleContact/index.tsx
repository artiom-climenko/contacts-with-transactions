import React, { useMemo, useRef, useState } from 'react';
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
  PaymentStatus,
  Status,
  TableColumn,
  ViewMore,
  ViewMoreAndMoreWrapper,
} from './index.styles';
import { MoreButton } from '../TableTitles/index.styles';
import { Icon, IconNames } from '../Icon';
import { Contact } from '../../entites';
import { Dropdown } from '../Dropdown';
import { useOutsideClick } from '../../hooks/useOutsideClick';

export interface ISingleContactProps {
  contact: Contact;
}

export function SingleContact({
  contact: {
    displayName,
    email,
    status,
    lastLogin,
    paymentStatus,
    paymentOn,
    amount,
    currency,
    currencySymbol,
  },
}: ISingleContactProps) {
  let [isOpen, setOpen] = useState(false);
  let ref = useRef<HTMLDivElement>(null);
  // @ts-ignore
  useOutsideClick({ ref, onClick: () => setOpen(false) });

  let renderedLastLoginDate = useMemo(() => {
    let newDateLogin = new Date(lastLogin);
    return `${newDateLogin.getDate()}/${
      newDateLogin.getMonth() + 1
    }/${newDateLogin.getFullYear()}`;
  }, [lastLogin]);

  let renderedPaidOnDate = useMemo(() => {
    let newDatePaid = new Date(paymentOn);
    return `${newDatePaid.getDate()}/${
      newDatePaid.getMonth() + 1
    }/${newDatePaid.getFullYear()}`;
  }, [paymentOn]);

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
        <Name>{displayName}</Name>
        <span>
          <Email href={`mailto: ${email}`} target="_blank">
            {email}
          </Email>
        </span>
      </TableColumn>
      <TableColumn>
        <Status isActive={status === 'active'}>{status}</Status>
        <LastLogin>Last login: {renderedLastLoginDate}</LastLogin>
      </TableColumn>
      <TableColumn>
        <PaymentStatus status={paymentStatus}>{paymentStatus}</PaymentStatus>
        <PaymentDescription>Paid on {renderedPaidOnDate}</PaymentDescription>
      </TableColumn>
      <TableColumn>
        <Amount>
          {currencySymbol}
          {amount}
        </Amount>
        <Currency>{currency}</Currency>
      </TableColumn>
      <ViewMoreAndMoreWrapper>
        <ViewMore>View More</ViewMore>
        <MoreButton onClick={() => setOpen(true)}>
          <Icon
            icon={IconNames.breadcrumb}
            size={20}
            fill="var(--color-font-primary-icon)"
          />
        </MoreButton>
        <Dropdown ref={ref} isOpen={isOpen} />
      </ViewMoreAndMoreWrapper>
    </ContactWrapper>
  );
}
