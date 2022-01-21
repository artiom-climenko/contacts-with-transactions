import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ChildrenContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  min-width: 380px;
  background-color: var(--color-background-primary);
  border-radius: 8px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const ModalTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: var(--color-font-primary-variant);
`;

export const CloseModalButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:before,
  :after {
    content: '';
    position: absolute;
    width: 25px;
    height: 1px;
    background-color: var(--color-primary);
  }
  &:before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: right;
  gap: 10px;
  padding: 20px;
`;

export const ModalButton = styled.button`
  padding: 10px;
  font-size: 16px;
  border: 1px solid var(--color-font-stroke);
  border-radius: 6px;
  color: var(--color-font-primary);
  background-color: var(--color-background-stripe);
  cursor: pointer;
  &:hover {
    border: 1px solid var(--color-primary);
  }
`;
