import React from "react";

import { Country } from "../../interfaces/country";
import { Card } from "../../styles/components/UI/card";
import {
  Typography,
  FieldTitle,
  CountryName,
} from "../../styles/components/UI/typography";

const CountryCard: React.FC<{
  country: Country;
  onClick: CallableFunction;
}> = ({ country, onClick }) => (
  <Card img={country.flags.svg} alt={country.name.common} onClick={onClick}>
    <CountryName>{country.name.common}</CountryName>
    <Typography>
      <FieldTitle>Population: </FieldTitle>
      {country.population.toLocaleString()}
    </Typography>
    <Typography>
      <FieldTitle>Region: </FieldTitle>
      {country.region}
    </Typography>
    <Typography>
      <FieldTitle>Capital: </FieldTitle>
      {country.capital}
    </Typography>
  </Card>
);

export default CountryCard;
