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

export function ContactsContainer() {
  let { contacts } = useContacts();
  return (
    <Container>
      <FilterAndSearch>
        <FilterButton />
        <SearchField />
      </FilterAndSearch>
      <TableTitles />
      <SingleContact />
      <SectionPagination />
    </Container>
  );
}
