import React from 'react';
import { Container } from './index.styles';
import { ContactsContainer, TabBar, PageTitle } from '../components';
import { IAppProps } from '../App';

export function DashboardPage({ isDark, setIsDark }: IAppProps) {
  return (
    <Container>
      <PageTitle isDark={isDark} setIsDark={setIsDark} />
      <TabBar />
      <ContactsContainer />
    </Container>
  );
}
