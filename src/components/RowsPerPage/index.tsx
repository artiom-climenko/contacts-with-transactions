import React from 'react';

export interface IPropsRowsPerPage {
  pageCount: number;
}

export function RowsPerPage({ pageCount }: IPropsRowsPerPage) {
  return <span>Rows per page: {pageCount}</span>;
}
