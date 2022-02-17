import React, { ReactNode, useRef } from 'react';
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
import { useClickAway } from 'react-use';

export interface IModalProps {
  children?: ReactNode;
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
  isOpen,
}: IModalProps) {
  const ref = useRef(null);
  useClickAway(ref, () => {
    onClose();
  });
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Wrapper>
      <ChildrenContainer ref={ref}>
        <ModalHeader>
          <ModalTitle>{modalTitle}</ModalTitle>
          <CloseModalButton type="button" onClick={onClose}>
            <Icon
              icon={IconNames.modalClose}
              size={20}
              fill="var(--color-primary)"
            />
          </CloseModalButton>
        </ModalHeader>
        {children}
        <ModalFooter>
          <ModalButton type="button" onClick={onClose}>
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
