import React from 'react';
import { DropdownItem, DropdownList, DropdownWrapper } from './index.styles';
import { useTranslation } from 'react-i18next';

export interface IDropDownProps {
  isOpen: boolean;
  ref: any;
}

export function Dropdown({ isOpen, ref }: IDropDownProps) {
  const { t } = useTranslation();

  return (
    <DropdownWrapper ref={ref} isOpen={isOpen}>
      <DropdownList>
        <DropdownItem>{t('dropdown.edit')}</DropdownItem>
        <DropdownItem>{t('dropdown.viewProfile')}</DropdownItem>
        <DropdownItem>{t('dropdown.delete')}</DropdownItem>
      </DropdownList>
    </DropdownWrapper>
  );
}
