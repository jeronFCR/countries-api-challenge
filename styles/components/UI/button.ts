import styled from "styled-components";

import ButtonComponent from "../../../components/UI/button";

export const Button = styled(ButtonComponent)<{ $shadow?: boolean }>`
  background-color: ${({ theme }) => theme.elements};
  display: inline-flex;
  cursor: pointer;
  border: 0px;
  padding: 10px 30px;
  border-radius: 4px;
  ${({ $shadow }) =>
    $shadow === false
      ? null
      : `box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;`}

  & span {
    margin-right: 8px;
    margin-left: -4px;
  }
`;
