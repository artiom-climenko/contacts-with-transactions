import React from 'react';
import { Container } from './index.styles';
import {
  ContactsContainer,
  TabBar,
  PageTitle,
  SingleContact,
} from '../components';

export function DashboardPage() {
  return (
    <Container>
      <PageTitle />
      <TabBar />
      <ContactsContainer />
      <SingleContact />
    </Container>
  );
}
