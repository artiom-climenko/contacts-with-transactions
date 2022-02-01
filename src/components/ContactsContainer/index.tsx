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
import { DeleteContactModal } from '../../modals';
import { AddContactButton } from '../../ui';

export function ContactsContainer() {
  let { isLoading, globalError, contacts } = useContacts();
  let [isOpenModal, setOpenModal] = useState(false);
  let renderedContacts = useMemo(
    () =>
      contacts.map((contact) => (
        <SingleContact
          key={contact.id}
          contact={contact}
          isOpenModal={isOpenModal}
          setOpenModal={setOpenModal}
        />
      )),
    [contacts, isOpenModal],
  );

  return (
    <Container>
      <DeleteContactModal
        isOpen={isOpenModal}
        onClose={() => setOpenModal(false)}
        onSubmit={() => {}}
        modalTitle="Confirm the action"
        confirmationButtonTitle="Yes"
        rejectButtonTitle="No"
      />
      <FilterAndSearch>
        <FilterButton />
        <SearchField />
        <AddContactButton />
      </FilterAndSearch>
      <TableTitles />
      {isLoading && <Loader />}
      {globalError && <ErrorMessage message={globalError} />}
      {renderedContacts}
      <SectionPagination />
    </Container>
  );
}
