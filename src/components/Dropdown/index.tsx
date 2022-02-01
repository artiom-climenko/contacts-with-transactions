import React from 'react';
import { DropdownItem, DropdownList, DropdownWrapper } from './index.styles';
import { useTranslation } from 'react-i18next';

export interface IDropDownProps {
  isOpenDropdown: boolean;
  setOpenDeleteModal: (value: boolean) => void;
  ref: any;
}

export function Dropdown({
  isOpenDropdown,
  setOpenDeleteModal,
  ref,
}: IDropDownProps) {
  const { t } = useTranslation();

  return (
    <DropdownWrapper ref={ref} isOpenDropdown={isOpenDropdown}>
      <DropdownList>
        <DropdownItem>{t('dropdown.edit')}</DropdownItem>
        <DropdownItem>{t('dropdown.viewProfile')}</DropdownItem>
        <DropdownItem onClick={() => setOpenDeleteModal(true)}>
          {t('dropdown.delete')}
        </DropdownItem>
      </DropdownList>
    </DropdownWrapper>
  );
}
