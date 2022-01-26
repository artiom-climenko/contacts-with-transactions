import React, { ChangeEventHandler } from 'react';
import { LabelField } from '../LabelField';
import { Select, SelectFieldWrapper, SelectWarning } from './index.styles';

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
          <option selected>Select the status</option>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
          <option value="Overdue">Overdue</option>
        </Select>
      </LabelField>
      {error && <SelectWarning>{error}</SelectWarning>}
    </SelectFieldWrapper>
  );
}
