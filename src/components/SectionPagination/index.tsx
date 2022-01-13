import React from 'react';
import {
  DropDownButton,
  NavigationButton,
  PaginationElement,
  PaginationWrapper,
} from './index.styles';
import { Icon, IconNames } from '../Icon';
import { RowsPerPage } from '../RowsPerPage';
import { TotalPages } from '../TotalPages';

export function SectionPagination() {
  const isNextDisabled = false;
  const isPrevDisabled = true;

  return (
    <PaginationWrapper>
      <PaginationElement>
        <RowsPerPage pageCount={10} />
        <DropDownButton>
          <Icon
            icon={IconNames.dropDown}
            size={8}
            fill="var(--color-font-primary-variant)"
          />
        </DropDownButton>
      </PaginationElement>
      <PaginationElement>
        <TotalPages
          firstContactOnThePage={1}
          lastContactOnThePage={10}
          totalContacts={276}
        />
      </PaginationElement>
      <PaginationElement>
        <NavigationButton disabled={isPrevDisabled}>
          <Icon
            icon={IconNames.arrowBack}
            size={10}
            fill="var(--color-font-primary-variant)"
          />
        </NavigationButton>
        <NavigationButton disabled={isNextDisabled}>
          <Icon
            icon={IconNames.arrowNext}
            size={10}
            fill="var(--color-font-primary-variant)"
          />
        </NavigationButton>
      </PaginationElement>
    </PaginationWrapper>
  );
}
