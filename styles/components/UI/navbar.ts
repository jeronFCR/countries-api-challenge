import styled from "styled-components";

import NavbarComponent from "../../../components/UI/navbar";

export const Navbar = styled(NavbarComponent)`
  background-color: ${({ theme }) => theme.elements};
  padding: 8px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  & .title {
    font-size: 17px;
    font-weight: 800;
  }
`;
