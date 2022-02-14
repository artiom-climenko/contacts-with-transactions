import React, { ChangeEventHandler } from 'react';
import { LabelField } from '../LabelField';
import { Select, SelectFieldWrapper, SelectWarning } from './index.styles';
import { useTranslation } from 'react-i18next';

export interface ISelectFieldProps {
  id: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler;
  onBlur?: ChangeEventHandler;
  error?: string;
  title: string;
}

export function SelectField({
  id,
  name,
  value,
  onChange,
  onBlur,
  error,
  title,
}: ISelectFieldProps) {
  const { t } = useTranslation();

  return (
    <SelectFieldWrapper>
      <LabelField>
        {title}
        <Select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        >
          <option selected>
            {t('modals.createContact.form.select.selected')}
          </option>
          <option value="paid">
            {t('modals.createContact.form.select.paid')}
          </option>
          <option value="unpaid">
            {t('modals.createContact.form.select.unpaid')}
          </option>
          <option value="overdue">
            {t('modals.createContact.form.select.overdue')}
          </option>
        </Select>
      </LabelField>
      {error && <SelectWarning>{error}</SelectWarning>}
    </SelectFieldWrapper>
  );
}
