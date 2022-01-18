import styled from '@emotion/styled';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 15px 20px;
  background-color: var(--color-background-stripe);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const PaginationElement = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.2;
  color: var(--color-font-primary-variant);
  &:not(:first-child) {
    margin-left: 50px;
  }
`;

export const DropDownButton = styled.button`
  margin-left: 10px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const NavigationButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:last-child {
    margin-left: 50px;
  }
`;
