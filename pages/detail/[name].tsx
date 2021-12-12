import React from "react";
import { NextPage } from "next";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { useSummaryCountry } from "../../context/country";
import {
  Typography,
  FieldTitle,
  CountryName,
} from "../../styles/components/UI/typography";
import { Grid } from "../../styles/components/UI/grid";
import { Flag } from "../../styles/components/UI/flag";
import { Chip } from "../../styles/components/UI/chip";
import { Button } from "../../styles/components/UI/button";
import { CountryDetail } from "../../styles/components/country/countryDetail";

const CountryDetailPage: NextPage = () => {
  const router = useRouter();
  const { selectedCountry: c } = useSummaryCountry();

  return (
    <React.Fragment>
      <Grid $col={1}>
        <div>
          <Button
            icon={faArrowLeft}
            onClick={() => {
              router.back();
            }}
          >
            Back
          </Button>
        </div>
      </Grid>
      <Grid $col={2} $colXS={1} $colMD={1} $gapY={false} $paddingY={false}>
        <Flag
          $click={false}
          $detail={true}
          src={c.flags.svg}
          alt={c.name.common}
        />
        <CountryDetail>
          <CountryName $detail>{c.name.common}</CountryName>
          <Grid $col={2} $colXS={1} $colMD={1} $gapX={false} $gapY={false}  $paddingX={false} $paddingY={false}>
            <div>
              <Typography $detail>
                <FieldTitle>Native Name: </FieldTitle>
                {c.name.nativeName[Object.keys(c.name.nativeName)[0]].common}
              </Typography>
              <Typography $detail>
                <FieldTitle>Population: </FieldTitle>
                {c.population.toLocaleString()}
              </Typography>
              <Typography $detail>
                <FieldTitle>Region: </FieldTitle>
                {c.region}
              </Typography>
              <Typography $detail>
                <FieldTitle>Sub Region: </FieldTitle>
                {c.subregion}
              </Typography>
              <Typography $detail>
                <FieldTitle>Capital: </FieldTitle>
                {c.capital}
              </Typography>
            </div>
            <div>
              <Typography $detail>
                <FieldTitle>Top Level Domain: </FieldTitle>
                {c.tld.join(", ")}
              </Typography>
              <Typography $detail>
                <FieldTitle>Currencies: </FieldTitle>
                {Object.keys(c.currencies)
                  .map((key: string) => c.currencies[key].name)
                  .join(", ")}
              </Typography>
              <Typography $detail>
                <FieldTitle>Languages: </FieldTitle>
                {Object.keys(c.languages)
                  .map((key: string) => c.languages[key])
                  .join(", ")}
              </Typography>
            </div>
          </Grid>
          {c.borders ? (
            <Typography $detail>
              <FieldTitle>Border Countries: </FieldTitle>
              {c.borders.map((b: string) => (
                <Chip key={uuidv4()} $click={false}>
                  {b}
                </Chip>
              ))}
            </Typography>
          ) : null}
        </CountryDetail>
      </Grid>
    </React.Fragment>
  );
};

export default CountryDetailPage;
