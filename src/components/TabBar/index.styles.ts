import styled from '@emotion/styled';

export const BlockWithTabs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 30px;
  margin-top: 20px;
  border-bottom: 1px solid var(--color-font-stroke);
`;

export const TabList = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
`;

export const TabItem = styled.li<{ isActive: boolean }>`
  height: 100%;
  padding: 7px 15px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  cursor: pointer;

  color: ${(props) =>
    props.isActive
      ? 'var(--color-font-primary)'
      : 'var(--color-font-primary-variant)'};

  border-bottom: 2px solid;

  border-bottom-color: ${(props) =>
    props.isActive ? 'var(--color-font-primary)' : 'transparent'};

  &:hover {
    opacity: ${(props) => (props.isActive ? '1' : '0.8')};
  }
`;
