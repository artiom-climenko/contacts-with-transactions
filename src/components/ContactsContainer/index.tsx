import React, { useMemo, useState } from 'react';
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
import { CreateContactModal, DeleteContactModal } from '../../modals';
import { AddContactButton } from '../../ui';

export function ContactsContainer() {
  let { isLoading, globalError, contacts } = useContacts();
  let [isOpenDeleteModal, setOpenDeleteModal] = useState(false);
  let [isOpenCreateModal, setOpenCreateModal] = useState(false);
  let renderedContacts = useMemo(
    () =>
      contacts.map((contact) => (
        <SingleContact
          key={contact.id}
          contact={contact}
          setOpenDeleteModal={setOpenDeleteModal}
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
        modalTitle="Confirm the action"
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
