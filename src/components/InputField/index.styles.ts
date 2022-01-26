import styled from '@emotion/styled';

export const InputFieldWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 5px;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  max-width: 392px;
  padding: 11px;
  margin-top: 5px;
  background: var(--color-background-stripe);
  outline: none;
  border: 1px solid var(--color-font-stroke);
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.2;
  color: var(--color-font-primary-variant);
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

export const InputWarning = styled.div`
  min-height: 16px;
  margin-top: 3px;
  margin-left: 5px;
  font-size: 12px;
  color: var(--color-font-negative);
`;
