import React from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';

export interface IPageNotFoundProps extends RouteComponentProps {
  alternative: string;
}

export function PageNotFound(props: IPageNotFoundProps) {
  return <Redirect to={props.alternative} noThrow />;
}
