import React from 'react';
import { DropdownItem, DropdownList, DropdownWrapper } from './index.styles';
import { useTranslation } from 'react-i18next';

export interface IDropDownProps {
  isOpenDropdown: boolean;
  setOpenModal: (value: boolean) => void;
  ref: any;
}

export function Dropdown({
  isOpenDropdown,
  setOpenModal,
  ref,
}: IDropDownProps) {
  const { t } = useTranslation();

  return (
    <DropdownWrapper ref={ref} isOpenDropdown={isOpenDropdown}>
      <DropdownList>
        <DropdownItem>{t('dropdown.edit')}</DropdownItem>
        <DropdownItem>{t('dropdown.viewProfile')}</DropdownItem>
        <DropdownItem onClick={() => setOpenModal(true)}>
          {t('dropdown.delete')}
        </DropdownItem>
      </DropdownList>
    </DropdownWrapper>
  );
}
