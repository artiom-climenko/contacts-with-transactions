import styled from '@emotion/styled';

export const TableTitlesWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.45fr 2fr 1.5fr 1fr 0.5fr 0.7fr;
  align-items: center;
  gap: 10px;
  padding: 13px 20px;
  background-color: ${(props) => props.theme.colorBackgroundStripe};
`;

export const ColumnTitle = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.2;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colorFontPrimaryVariant};
  &:nth-child(5) {
    justify-self: end;
  }
`;

export const MoreButton = styled.button`
  justify-self: end;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
`;
