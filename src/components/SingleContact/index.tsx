import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as dayjs from 'dayjs';
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

export interface ISingleContactProps {
  contact: Contact;
  onDelete: () => void;
  onEdit: () => void;
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
  onDelete,
  onEdit,
}: ISingleContactProps) {
  let [isOpenDropdown, setOpenDropdown] = useState(false);
  const { t } = useTranslation();

  let renderedLastLoginDate = useMemo(() => {
    return dayjs(lastLogin).format('DD/MMM/YYYY').toUpperCase();
  }, [lastLogin]);

  let renderedPaidOnDate = useMemo(() => {
    return dayjs(paymentOn).format('DD/MMM/YYYY').toUpperCase();
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
        <Status isActive={status === 'active'}>
          {t(`singleContact.userStatus.${status}`)}
        </Status>
        <LastLogin>
          {t('singleContact.lastLogin')} {renderedLastLoginDate}
        </LastLogin>
      </TableColumn>
      <TableColumn>
        <PaymentStatus status={paymentStatus}>
          {t(`singleContact.paymentStatus.${paymentStatus}`)}
        </PaymentStatus>
        <PaymentDescription>
          {t('singleContact.paidOn')} {renderedPaidOnDate}
        </PaymentDescription>
      </TableColumn>
      <TableColumn>
        <Amount>
          {currencySymbol}
          {amount}
        </Amount>
        <Currency>{currency}</Currency>
      </TableColumn>
      <ViewMoreAndMoreWrapper>
        <ViewMore>{t('singleContact.viewMore')}</ViewMore>
        <MoreButton onClick={() => setOpenDropdown(true)}>
          <Icon
            icon={IconNames.breadcrumb}
            size={20}
            fill="var(--color-font-primary-icon)"
          />
        </MoreButton>
        <Dropdown
          onDelete={onDelete}
          onEdit={onEdit}
          isOpenDropdown={isOpenDropdown}
          setOpenDropdown={setOpenDropdown}
        />
      </ViewMoreAndMoreWrapper>
    </ContactWrapper>
  );
}
