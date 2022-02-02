import React from 'react';
import { DropdownItem, DropdownList, DropdownWrapper } from './index.styles';
import { useTranslation } from 'react-i18next';

export interface IDropDownProps {
  isOpenDropdown: boolean;
  onDelete: () => void;
  onEdit: () => void;
  ref: any;
}

export function Dropdown({
  isOpenDropdown,
  onDelete,
  onEdit,
  ref,
}: IDropDownProps) {
  const { t } = useTranslation();

  return (
    <DropdownWrapper ref={ref} isOpenDropdown={isOpenDropdown}>
      <DropdownList>
        <DropdownItem onClick={onEdit}>{t('dropdown.edit')}</DropdownItem>
        <DropdownItem>{t('dropdown.viewProfile')}</DropdownItem>
        <DropdownItem onClick={onDelete}>{t('dropdown.delete')}</DropdownItem>
      </DropdownList>
    </DropdownWrapper>
  );
}
