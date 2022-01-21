import React, { ReactNode } from 'react';
import {
  ChildrenContainer,
  Wrapper,
  CloseModalButton,
  ModalHeader,
  ModalTitle,
  ModalButton,
  ModalFooter,
} from './index.styles';

export interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  modalTitle: string;
  confirmationButton: string;
  rejectButton: string;
}

export function Modal({
  children,
  modalTitle,
  confirmationButton,
  rejectButton,
  onClose,
  onSubmit,
}: IModalProps) {
  return (
    <Wrapper onClick={(event) => event.stopPropagation()}>
      <ChildrenContainer>
        <ModalHeader>
          <ModalTitle>{modalTitle}</ModalTitle>
          <CloseModalButton />
        </ModalHeader>
        {children}
        <ModalFooter>
          <ModalButton type="submit" onClick={onClose}>
            {confirmationButton}
          </ModalButton>
          <ModalButton type="submit" onClick={onSubmit}>
            {rejectButton}
          </ModalButton>
        </ModalFooter>
      </ChildrenContainer>
    </Wrapper>
  );
}
