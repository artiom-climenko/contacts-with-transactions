import React from 'react';
import LoaderSVG from '../../assets/loader.svg';
import { LoaderContainer } from './index.styles';

export function Loader() {
  return (
    <LoaderContainer>
      <img src={LoaderSVG} alt="Loading SVG" />
    </LoaderContainer>
  );
}
