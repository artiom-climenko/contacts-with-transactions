import React, { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useClickAway } from 'react-use';
import { DropdownItem, DropdownList, DropdownWrapper } from './index.styles';

export interface IDropDownProps {
  isOpenDropdown: boolean;
  setOpenDropdown: (value: boolean) => void;
  onDelete: () => void;
  onEdit: () => void;
}

export function Dropdown({
  isOpenDropdown,
  onDelete,
  onEdit,
  setOpenDropdown,
}: IDropDownProps) {
  const { t } = useTranslation();

  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpenDropdown(false);
  });

  let handleEdit = useCallback(() => {
    onEdit();
    setOpenDropdown(false);
  }, []);

  let handleDelete = useCallback(() => {
    onDelete();
    setOpenDropdown(false);
  }, []);

  return (
    <DropdownWrapper ref={ref} isOpenDropdown={isOpenDropdown}>
      <DropdownList>
        <DropdownItem onClick={handleEdit}>{t('dropdown.edit')}</DropdownItem>
        <DropdownItem>{t('dropdown.viewProfile')}</DropdownItem>
        <DropdownItem onClick={handleDelete}>
          {t('dropdown.delete')}
        </DropdownItem>
      </DropdownList>
    </DropdownWrapper>
  );
}
