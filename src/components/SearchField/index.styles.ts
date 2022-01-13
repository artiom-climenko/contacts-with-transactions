import styled from '@emotion/styled';

export const SearchInput = styled.input`
  position: relative;
  width: 100%;
  max-width: 392px;
  margin-left: 20px;
  padding: 11px 5px 11px 40px;
  background: var(--color-background-stripe);
  outline: none;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.2;
  color: var(--color-font-primary-variant);
  &::placeholder {
    color: var(--color-font-primary-variant);
    transition: opacity 0.3s ease;
  }
  &:focus {
    border: 1px solid var(--color-primary);
    &::placeholder {
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }
  &::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }
`;

export const SearchFieldWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const IconWrapper = styled.span`
  position: absolute;
  top: 10px;
  left: 30px;
  z-index: 10;
`;
