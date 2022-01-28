import styled from '@emotion/styled';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  text-transform: uppercase;
  color: ${(props) => props.theme.colorFontPrimaryVariant};
`;

export const LanguagesChangeButton = styled.button`
  padding: 5px;
  margin-left: 5px;
  font-size: 14px;
  border: 1px solid var(--color-font-stroke);
  border-radius: 6px;
  color: ${(props) => props.theme.colorFontPrimary};
  background-color: ${(props) => props.theme.colorBackgroundButton};
  cursor: pointer;
  &:hover {
    border: 1px solid var(--color-primary);
  }
`;
