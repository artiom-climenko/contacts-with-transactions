import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ModalBody = styled.div`
  padding: 20px;
  border-top: 1px solid var(--color-font-stroke);
  border-bottom: 1px solid var(--color-font-stroke);
`;

export const ModalFormLabel = styled.label`
  display: inline-block;
  padding: 0 5px 5px 5px;
  font-weight: 600;
  font-size: 14px;
  color: var(--color-font-primary-variant);
  &:not(:first-child) {
    margin-top: 5px;
  }
`;

export const basicStylesOfFormElements = css`
  display: block;
  width: 100%;
  max-width: 392px;
  padding: 11px;
  background: var(--color-background-stripe);
  outline: none;
  border: 1px solid var(--color-font-stroke);
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.2;
  color: var(--color-font-primary-variant);
`;

export const ModalFormInput = styled.input`
  ${basicStylesOfFormElements}
  &::placeholder {
    color: var(--color-font-primary-variant);
    transition: opacity 0.3s ease;
  }
  &:focus {
    border: 1px solid var(--color-primary);
    &::placeholder {
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }
`;

export const ModalFormSelect = styled.select`
  ${basicStylesOfFormElements}
`;

export const ModalFormInputWarning = styled.div`
  min-height: 16px;
  margin-top: 3px;
  margin-left: 5px;
  font-size: 12px;
  color: var(--color-font-negative);
`;
