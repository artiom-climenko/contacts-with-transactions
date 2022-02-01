import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './index.styles';

export interface IAddContactButtonProps {
  setOpenCreateModal: (value: boolean) => void;
}

export function AddContactButton({
  setOpenCreateModal,
}: IAddContactButtonProps) {
  let { t } = useTranslation();
  return (
    <Button type="button" onClick={() => setOpenCreateModal(true)}>
      {t('createContact')}
    </Button>
  );
}
