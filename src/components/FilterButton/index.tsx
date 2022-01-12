import React from 'react';
import { Button, ButtonText } from './index.styles';
import { Icon, IconNames } from '../Icon';

export function FilterButton() {
  return (
    <Button>
      <Icon
        icon={IconNames.filter}
        size={20}
        fill="var(--color-font-primary-icon)"
      />
      <ButtonText>Filter</ButtonText>
    </Button>
  );
}
