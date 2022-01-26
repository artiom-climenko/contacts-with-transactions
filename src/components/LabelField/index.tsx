import React, { ReactNode } from 'react';
import { Label } from './index.styles';

export interface ILabelProps {
  children: ReactNode;
}

export function LabelField({ children }: ILabelProps) {
  return <Label>{children}</Label>;
}
