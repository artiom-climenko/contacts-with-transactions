import React, { useMemo } from 'react';
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

export function ContactsContainer() {
  let { isLoading, globalError, contacts } = useContacts();

  let renderedContacts = useMemo(
    () =>
      contacts.map((contact) => (
        <SingleContact key={contact.id} contact={contact} />
      )),
    [contacts],
  );
  return (
    <Container>
      <FilterAndSearch>
        <FilterButton />
        <SearchField />
      </FilterAndSearch>
      <TableTitles />
      {isLoading && <Loader />}
      {globalError && <ErrorMessage message={globalError} />}
      {renderedContacts}
      <SectionPagination />
    </Container>
  );
}
