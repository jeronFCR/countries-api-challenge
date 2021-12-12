import styled from "styled-components";

import InputComponent from "../../../components/UI/input";

export const Input = styled(InputComponent)`
  position: relative !important;
  box-sizing: border-box;

  & svg {
    right: auto;
    left: 1.5em;
    vertical-align: bottom;
    position: absolute;
    top: 55%;
    right: 0.7em;
    margin-top: -9px;
    pointer-events: none;
    color: ${({ theme }) => theme.inputPlaceholder};
    box-sizing: border-box;
  }

  & input {
    width: 50%;
    padding: 15px 30px;
    padding-left: 50px;
    background-color: ${({ theme }) => theme.elements};
    border: 0;
    border-radius: 4px;
    outline: none;
    color: ${({ theme }) => theme.text};
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
      rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

    &::placeholder {
      color: ${({ theme }) => theme.inputPlaceholder};
    }

    &::focus {
      border: 0;
    }
  }
`;
