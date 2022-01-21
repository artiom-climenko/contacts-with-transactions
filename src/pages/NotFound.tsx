import React from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';

export interface IPageNotFoundProps extends RouteComponentProps {
  alternative: string;
}

export function PageNotFound({ alternative }: IPageNotFoundProps) {
  return <Redirect to={alternative} noThrow />;
}
