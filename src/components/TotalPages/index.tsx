import React from 'react';
import { useTranslation } from 'react-i18next';

export interface IPropsTotalPages {
  firstContactOnThePage: number;
  lastContactOnThePage: number;
  totalContacts: number;
}

export function TotalPages({
  firstContactOnThePage,
  lastContactOnThePage,
  totalContacts,
}: IPropsTotalPages) {
  const { t } = useTranslation();

  return (
    <span>
      {firstContactOnThePage}-{lastContactOnThePage} {t('totalPages')}{' '}
      {totalContacts}
    </span>
  );
}
