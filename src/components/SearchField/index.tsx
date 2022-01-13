import React from 'react';
import { IconWrapper, SearchFieldWrapper, SearchInput } from './index.styles';
import { Icon, IconNames } from '../Icon';

export function SearchField() {
  return (
    <SearchFieldWrapper>
      <IconWrapper>
        <Icon
          icon={IconNames.search}
          size={20}
          fill="var(--color-font-primary-icon)"
        />
      </IconWrapper>
      <SearchInput
        type="search"
        placeholder="Search Users by Name, Email or Date"
      />
    </SearchFieldWrapper>
  );
}
