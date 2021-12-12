import styled from "styled-components";

export const Chip = styled.span<{ $click?: boolean }>`
  margin: 0 5px;
  padding: 5px 10px;
  text-align: center;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  background-color: ${({ theme }) => theme.elements};
  cursor: ${({ $click }) => ($click === false ? "unset" : "pointer")};
`;
