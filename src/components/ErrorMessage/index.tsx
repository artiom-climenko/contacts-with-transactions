import React from 'react';
import { ErrorWrapper } from './index.styles';

export interface IErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: IErrorMessageProps) {
  return (
    <ErrorWrapper>
      <p>{message}</p>
    </ErrorWrapper>
  );
}
