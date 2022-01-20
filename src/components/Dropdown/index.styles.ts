import styled from '@emotion/styled';

export const DropdownWrapper = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: 5px;
  z-index: 100;
  width: 140px;
  background: var(--color-background-primary);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
`;

export const DropdownList = styled.ul`
  margin: 0;
  padding: 10px;
  list-style: none;
`;

export const DropdownItem = styled.li`
  padding: 5px;
  font-size: 14px;
  line-height: 1.2;
  color: var(--color-font-primary);
  cursor: pointer;
  &:hover {
    background-color: var(--color-background-parent);
    border-radius: 4px;
  }
`;
