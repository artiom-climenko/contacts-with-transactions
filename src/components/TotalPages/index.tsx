import React from 'react';

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
  return (
    <span>
      {firstContactOnThePage}-{lastContactOnThePage} of {totalContacts}
    </span>
  );
}
