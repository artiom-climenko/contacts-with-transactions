import React, { ReactNode, useRef } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence } from 'framer-motion';
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

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.4 },
  },
};

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
  return ReactDOM.createPortal(
    <AnimatePresence exitBeforeEnter>
      {isOpen && (
        <Wrapper
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <ChildrenContainer ref={ref} variants={modal}>
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
        </Wrapper>
      )}
    </AnimatePresence>,
    document.getElementById('modals')!,
  );
}
