import React from 'react';
import { FilterButton, SearchField } from '../../components';
import { Container, FilterAndSearch } from './index.styles';

export function ContactsContainer() {
  return (
    <Container>
      <FilterAndSearch>
        <FilterButton />
        <SearchField />
      </FilterAndSearch>
    </Container>
  );
}
