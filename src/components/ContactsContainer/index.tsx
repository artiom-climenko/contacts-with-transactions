import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FilterButton,
  SectionPagination,
  SearchField,
  SingleContact,
  TableTitles,
} from '../../components';
import { Container, FilterAndSearch } from './index.styles';
import { useContacts } from '../../hooks';
import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import {
  CreateContactModal,
  DeleteContactModal,
  EditContactModal,
} from '../../modals';
import { AddContactButton } from '../../ui';
import { Contact } from '../../entites';

export function ContactsContainer() {
  const { t } = useTranslation();
  let { isLoading, globalError, contacts } = useContacts();
  let [isOpenDeleteModal, setOpenDeleteModal] = useState(false);
  let [isOpenCreateModal, setOpenCreateModal] = useState(false);
  let [isOpenEditModal, setOpenEditModal] = useState(false);
  let [selectedContact, setSelectedContact] = useState<Contact | undefined>(
    undefined,
  );

  let handleDeleteContact = useCallback((contact: Contact) => {
    setSelectedContact(contact);
    setOpenDeleteModal(true);
  }, []);

  let handleEditContact = useCallback((contact: Contact) => {
    setSelectedContact(contact);
    setOpenEditModal(true);
  }, []);

  let renderedContacts = useMemo(
    () =>
      contacts.map((contact) => (
        <SingleContact
          key={contact.id}
          contact={contact}
          onDelete={() => handleDeleteContact(contact)}
          onEdit={() => handleEditContact(contact)}
        />
      )),
    [contacts],
  );

  return (
    <Container>
      <DeleteContactModal
        isOpen={isOpenDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onSubmit={() => {}}
        modalTitle={t('modals.deleteContact.delete', { selectedContact })}
        confirmationButtonTitle={t('modals.deleteContact.yes')}
        rejectButtonTitle={t('modals.deleteContact.no')}
      />
      <CreateContactModal
        isOpen={isOpenCreateModal}
        onClose={() => setOpenCreateModal(false)}
        onSubmit={() => {}}
        modalTitle={t('modals.createContact.title')}
        confirmationButtonTitle={t('modals.createContact.save')}
        rejectButtonTitle={t('modals.createContact.close')}
      />
      <EditContactModal
        isOpen={isOpenEditModal}
        onClose={() => setOpenEditModal(false)}
        onSubmit={() => {}}
        selectedContact={selectedContact}
        modalTitle={t('modals.editContact.title')}
        confirmationButtonTitle={t('modals.editContact.save')}
        rejectButtonTitle={t('modals.editContact.close')}
      />
      <FilterAndSearch>
        <FilterButton />
        <SearchField />
        <AddContactButton setOpenCreateModal={setOpenCreateModal} />
      </FilterAndSearch>
      <TableTitles />
      {isLoading && <Loader />}
      {globalError && <ErrorMessage message={globalError} />}
      {renderedContacts}
      <SectionPagination />
    </Container>
  );
}
