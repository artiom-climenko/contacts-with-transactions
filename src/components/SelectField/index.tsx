import React, { ChangeEventHandler } from 'react';
import {
  SelectFieldWrapper,
  SelectStyles,
  SelectWarning,
} from './index.styles';
import Select, { SingleValue } from 'react-select';
import { LabelField } from '../LabelField';

export interface ISelectFieldProps {
  id: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler;
  error?: string;
  title: string;
}

export function SelectField({
  id,
  name,
  value,
  onChange,
  error,
  title,
}: ISelectFieldProps) {
  const optionsSelect: any[] = [
    { value: 'paid', label: 'Paid' },
    { value: 'unpaid', label: 'Unpaid' },
    { value: 'overdue', label: 'Overdue' },
  ];
  return (
    <SelectFieldWrapper style={{}}>
      <LabelField>
        {title}
        <Select
          options={optionsSelect}
          styles={SelectStyles}
          id={id}
          name={name}
          value={value}
          onChange={(event: SingleValue<string>) =>
            form.setFieldValue('field-name', value)
          }
        />
      </LabelField>
      {error && <SelectWarning>{error}</SelectWarning>}
    </SelectFieldWrapper>
  );
}
