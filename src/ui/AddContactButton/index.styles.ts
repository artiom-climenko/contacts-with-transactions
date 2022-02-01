import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 5px;
  font-size: 14px;
  border: 1px solid var(--color-font-stroke);
  border-radius: 6px;
  color: var(--color-font-primary);
  background-color: var(--color-background-primary);
  cursor: pointer;
  &:hover {
    border: 1px solid var(--color-primary);
  }
`;
