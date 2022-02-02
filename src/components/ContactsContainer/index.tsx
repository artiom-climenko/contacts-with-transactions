import React, { useCallback, useMemo, useState } from 'react';
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
        modalTitle={`Delete ${selectedContact?.displayName}?`}
        confirmationButtonTitle="Yes"
        rejectButtonTitle="No"
      />
      <CreateContactModal
        isOpen={isOpenCreateModal}
        onClose={() => setOpenCreateModal(false)}
        onSubmit={() => {}}
        modalTitle="Create new contact"
        confirmationButtonTitle="Confirm"
        rejectButtonTitle="Close"
      />
      <EditContactModal
        isOpen={isOpenEditModal}
        onClose={() => setOpenEditModal(false)}
        onSubmit={() => {}}
        selectedContact={selectedContact}
        modalTitle="Edit contact"
        confirmationButtonTitle="Confirm"
        rejectButtonTitle="Close"
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
