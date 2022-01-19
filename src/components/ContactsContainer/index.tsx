import React from 'react';
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
  let { isLoading, error } = useContacts();
  return (
    <Container>
      <FilterAndSearch>
        <FilterButton />
        <SearchField />
      </FilterAndSearch>
      <TableTitles />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <SingleContact />
      <SectionPagination />
    </Container>
  );
}
