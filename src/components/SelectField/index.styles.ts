import styled from '@emotion/styled';

export const SelectFieldWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 5px;
  }
`;

export const SelectWarning = styled.div`
  min-height: 16px;
  margin-top: 3px;
  margin-left: 5px;
  font-size: 12px;
  color: var(--color-font-negative);
`;

export const SelectStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: '1px solid var(--color-font-stroke)',
    color: state.isSelected
      ? 'var(--color-font-primary)'
      : 'var(--color-primary)',
    backgroundColor: state.isSelected
      ? 'var(--color-font-stroke)'
      : 'var(--color-background-stripe)',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 500,
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'var(--color-font-primary-variant)',
    fontSize: 14,
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    '*': {
      boxShadow: 'none',
    },
    height: 41,
    boxShadow: 'none',
    backgroundColor: 'var(--color-background-stripe)',
    borderRadius: 6,
    fontSize: 14,
    borderColor: state.isFocused
      ? 'var(--color-primary)'
      : 'var(--color-font-stroke)',
    '&:hover': {
      borderColor: state.isFocused
        ? 'var(--color-primary)'
        : 'var(--color-font-stroke)',
    },
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: 'var(--color-font-primary-variant)',
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: 'none',
  }),
  placeholder: (provided: any) => ({
    ...provided,
    fontSize: 14,
    fontWeight: 500,
    color: 'var(--color-font-primary-variant)',
  }),
  container: (provided: any) => ({
    ...provided,
    marginTop: 5,
  }),
};
