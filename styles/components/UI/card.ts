import styled from "styled-components";

import CardComponent from "../../../components/UI/card";

export const Card = styled(CardComponent)`
  background-color: ${({ theme }) => theme.elements};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
`;

export const CardBody = styled.div`
  padding: 25px;
`;
