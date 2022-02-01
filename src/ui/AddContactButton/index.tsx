import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './index.styles';

export function AddContactButton() {
  let { t } = useTranslation();
  return <Button type="button">{t('createContact')}</Button>;
}
