import { Router as ReachRouter } from '@reach/router';
import React from 'react';

import { Routes } from './routes';
import { DashboardPage, PageNotFound } from '../pages';
import { IAppProps } from '../App';

export function Router({ isDark, setIsDark }: IAppProps) {
  return (
    <ReachRouter primary={false}>
      <DashboardPage
        path={Routes.dashboard}
        isDark={isDark}
        setIsDark={setIsDark}
      />

      <PageNotFound
        default
        path={Routes.notFound}
        alternative={Routes.dashboard}
      />
    </ReachRouter>
  );
}
