import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--color-background-primary);
  border: 1px solid var(--color-font-stroke);
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--color-primary);
  }
`;

export const ButtonText = styled.span`
  margin-left: 10px;
  font-size: 16px;
  line-height: 1.2;
  color: var(--color-font-primary);
`;
