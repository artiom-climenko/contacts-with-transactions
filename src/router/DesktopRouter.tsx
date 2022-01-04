import { Router as ReachRouter } from '@reach/router';
import React from 'react';

import { Routes } from './routes';
import { DashboardPage, PageNotFound } from '../pages';

export function Router() {
  return (
    <ReachRouter primary={false}>
      <DashboardPage path={Routes.dashboard} />

      <PageNotFound
        default
        path={Routes.notFound}
        alternative={Routes.dashboard}
      />
    </ReachRouter>
  );
}
