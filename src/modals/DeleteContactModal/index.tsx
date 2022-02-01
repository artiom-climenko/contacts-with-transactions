import React from 'react';
import { IModalProps, Modal } from '../../components';
import { ModalBody, ModalBodyDescription } from './index.styles';

export interface IDeleteContactModalProps extends IModalProps {}

export function DeleteContactModal(props: IDeleteContactModalProps) {
  return (
    <Modal {...props}>
      <ModalBody>
        <ModalBodyDescription>Delete a contact?</ModalBodyDescription>
      </ModalBody>
    </Modal>
  );
}
