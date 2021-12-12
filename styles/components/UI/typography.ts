import styled from "styled-components";

export const Typography = styled.p<{ $detail?: boolean }>`
  margin: ${({ $detail }) => ($detail ? "0.5em 0" : "0.2em 0")};
  ${({ $detail }) => ($detail ? `font-size: 16px` : null)};
`;

export const FieldTitle = styled.span`
  font-weight: 600;
`;

export const CountryName = styled.p<{ $detail?: boolean }>`
  font-weight: 800;
  margin-top: 0;

  ${({ $detail }) =>
    $detail
      ? `
        font-size: 22px;
    `
      : `
        font-size: 17px;
    `};
`;
