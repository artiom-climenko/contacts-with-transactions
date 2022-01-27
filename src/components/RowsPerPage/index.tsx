import React from 'react';
import { useTranslation } from 'react-i18next';

export interface IPropsRowsPerPage {
  pageCount: number;
}

export function RowsPerPage({ pageCount }: IPropsRowsPerPage) {
  const { t } = useTranslation();

  return (
    <span>
      {t('rowsPerPage')} {pageCount}
    </span>
  );
}
