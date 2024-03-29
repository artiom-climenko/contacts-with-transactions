import styled from '@emotion/styled';

export const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.45fr 2fr 1.5fr 1fr 0.5fr 0.7fr;
  align-items: center;
  gap: 10px;
  min-height: 60px;
  padding: 10px 20px;
  background-color: var(--color-background-primary);
`;

export const CheckboxAndCollapseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;

export const CollapseButton = styled.button`
  display: flex;
  align-items: center;
  padding: 3px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Name = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  color: var(--color-font-primary);
`;

export const Email = styled.a`
  text-decoration: none;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.05em;
  color: var(--color-font-primary-variant);
  &:hover {
    opacity: 0.8;
  }
`;

export const BaseStatus = styled.div`
  position: relative;
  align-self: start;
  padding: 2px 5px 2px 16px;
  background-color: var(--color-background-parent);
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 5px;
    top: 7px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
`;

export const Status = styled(BaseStatus)<{ isActive: boolean }>`
  color: ${({ isActive }) =>
    isActive ? 'var(--color-primary)' : 'var(--color-font-primary-variant)'};
  &::before {
    background-color: ${({ isActive }) =>
      isActive ? 'var(--color-primary)' : 'var(--color-font-primary-variant)'};
  }
`;

export const PaymentStatus = styled(BaseStatus)<{ status: string }>`
  color: ${({ status }) => {
    if (status === 'paid') {
      return 'var(--color-font-positive)';
    }
    if (status === 'unpaid') {
      return 'var(--color-font-neutral)';
    }
    return 'var(--color-font-negative)';
  }};
  background-color: ${({ status }) => {
    if (status === 'paid') {
      return 'var(--color-background-positive)';
    }
    if (status === 'unpaid') {
      return 'var(--color-background-neutral)';
    }
    return 'var(--color-background-negative)';
  }};
  &::before {
    background-color: ${({ status }) => {
      if (status === 'paid') {
        return 'var(--color-font-positive)';
      }
      if (status === 'unpaid') {
        return 'var(--color-font-neutral)';
      }
      return 'var(--color-font-negative)';
    }}
`;

export const LastLogin = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  color: var(--color-font-primary-variant);
`;

export const PaymentDescription = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  color: var(--color-font-primary);
`;

export const Amount = styled.div`
  align-self: end;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  text-transform: uppercase;
  color: var(--color-font-primary);
`;

export const Currency = styled.div`
  align-self: end;
  font-size: 12px;
  color: var(--color-font-primary);
`;

export const ViewMoreAndMoreWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ViewMore = styled.div`
  margin-left: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  color: var(--color-font-primary-variant);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
