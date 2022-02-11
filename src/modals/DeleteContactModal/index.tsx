import React from 'react';
import { useTranslation } from 'react-i18next';
import { IModalProps, Modal } from '../../components';
import { ModalBody, ModalBodyDescription } from './index.styles';

export interface IDeleteContactModalProps extends IModalProps {}

export function DeleteContactModal(props: IDeleteContactModalProps) {
  const { t } = useTranslation();
  return (
    <Modal {...props}>
      <ModalBody>
        <ModalBodyDescription>
          {t('modals.deleteContact.body')}
        </ModalBodyDescription>
      </ModalBody>
    </Modal>
  );
}
