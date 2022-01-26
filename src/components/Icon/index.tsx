import React from 'react';
import sprite from '../../assets/icons/sprite.svg';

export enum IconNames {
  arrowBack = 'arrowBack',
  arrowNext = 'arrowNext',
  checkboxActive = 'checkboxActive',
  checkboxNeutral = 'checkboxNeutral',
  delete = 'delete',
  arrowDown = 'arrowDown',
  dropDown = 'dropDown',
  edit = 'edit',
  filter = 'filter',
  info = 'info',
  master = 'master',
  breadcrumb = 'breadcrumb',
  radioActive = 'radioActive',
  radioNeutral = 'radioNeutral',
  search = 'search',
  modalClose = 'modalClose',
}

export interface IIconProps {
  icon: IconNames;
  size: number;
  fill: string;
}

export function Icon({ size, fill, icon }: IIconProps) {
  return (
    <svg width={size} height={size} fill={fill}>
      <use href={`${sprite}#${icon}`} />;
    </svg>
  );
}
