import styled from "styled-components";

export const Grid = styled.div<{
  $col: number;
  $colXS?: number;
  $colMD?: number;
  $colLG?: number;
  $gapY?: boolean;
  $gapX?: boolean;
  $paddingY?: boolean;
  $paddingX?: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(${({ $col }) => $col}, 1fr);
  row-gap: ${({ $gapY }) => ($gapY === false ? "unset" : "70px")};
  column-gap: ${({ $gapX }) => ($gapX === false ? "unset" : "70px")};
  padding-top: ${({ $paddingY }) => ($paddingY === false ? "unset" : "50px")};
  padding-bottom: ${({ $paddingY }) =>
    $paddingY === false ? "unset" : "50px"};
  padding-left: ${({ $paddingX }) => ($paddingX === false ? "unset" : "50px")};
  padding-right: ${({ $paddingX }) => ($paddingX === false ? "unset" : "50px")};

  @media (max-width: 1000px) {
    grid-template-columns: repeat(${({ $colLG }) => $colLG}, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(${({ $colMD }) => $colMD}, 1fr);
  }

  @media (max-width: 375px) {
    grid-template-columns: repeat(${({ $colXS }) => $colXS}, 1fr);
  }
`;
