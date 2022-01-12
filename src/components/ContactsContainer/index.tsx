import React from 'react';
import { FilterButton } from '../FilterButton';
import { Container, FilterAndSearch } from './index.styles';

export function ContactsContainer() {
  return (
    <Container>
      <FilterAndSearch>
        <FilterButton />
      </FilterAndSearch>
    </Container>
  );
}
