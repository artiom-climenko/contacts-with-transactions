import React from 'react';
import { DropdownItem, DropdownList, DropdownWrapper } from './index.styles';

export interface IDropDownProps {
  isOpen: boolean;
  ref: any;
}

export function Dropdown({ isOpen, ref }: IDropDownProps) {
  return (
    <DropdownWrapper ref={ref} isOpen={isOpen}>
      <DropdownList>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>View Profile</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
      </DropdownList>
    </DropdownWrapper>
  );
}
