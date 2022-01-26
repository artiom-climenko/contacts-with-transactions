import React, { ChangeEventHandler } from 'react';
import { Input, InputFieldWrapper, InputWarning } from './index.styles';
import { LabelField } from '../LabelField';

export interface IPropsInputField {
  type: string;
  id: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler;
  onBlur?: ChangeEventHandler;
  required?: boolean;
  error?: string;
  title: string;
}

export function InputField({
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  required,
  error,
  title,
  onBlur,
}: IPropsInputField) {
  return (
    <InputFieldWrapper>
      <LabelField>
        {title}
        <Input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          onBlur={onBlur}
        />
      </LabelField>
      {error && <InputWarning>{error}</InputWarning>}
    </InputFieldWrapper>
  );
}
