import styled from "styled-components";
import { Grid } from "../UI/grid";

export const CountryDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 700px) {
    margin-top: 30px;

    & ${Grid} > * {
      margin: 10px 0;
    }
  }
`;
