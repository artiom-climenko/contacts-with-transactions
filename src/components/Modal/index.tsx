import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import {
  ChildrenContainer,
  Wrapper,
  ModalHeader,
  ModalTitle,
  ModalButton,
  ModalFooter,
  CloseModalButton,
} from './index.styles';
import { Icon, IconNames } from '../Icon';

export interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  modalTitle: string;
  confirmationButtonTitle: string;
  rejectButtonTitle: string;
}

export function Modal({
  children,
  modalTitle,
  confirmationButtonTitle,
  rejectButtonTitle,
  onClose,
  onSubmit,
}: IModalProps) {
  return ReactDOM.createPortal(
    <Wrapper onClick={(event) => event.stopPropagation()}>
      <ChildrenContainer>
        <ModalHeader>
          <ModalTitle>{modalTitle}</ModalTitle>
          <CloseModalButton onClick={onClose}>
            <Icon
              icon={IconNames.modalClose}
              size={20}
              fill="var(--color-primary)"
            />
          </CloseModalButton>
        </ModalHeader>
        {children}
        <ModalFooter>
          <ModalButton type="submit" onClick={onClose}>
            {rejectButtonTitle}
          </ModalButton>
          <ModalButton type="submit" onClick={onSubmit}>
            {confirmationButtonTitle}
          </ModalButton>
        </ModalFooter>
      </ChildrenContainer>
    </Wrapper>,
    document.getElementById('modals')!,
  );
}
