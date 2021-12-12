import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

import { useSummaryCountry } from "../context/country";
import { Country } from "../interfaces/country";
import { Grid } from "../styles/components/UI/grid";
import CountryCard from "../components/country/countryCard";
import { Input } from "../styles/components/UI/input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home: NextPage = () => {
  const router = useRouter();
  const [filter, setFilter] = useState("");
  const { state, getAll, setSelectedCountry } = useSummaryCountry();

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <React.Fragment>
      <Grid $col={2}>
        <div>
          <Input
            icon={faSearch}
            placeholder="Search for a country..."
            onChange={setFilter}
          ></Input>
        </div>
      </Grid>
      <Grid $col={4} $colXS={1} $colMD={2} $colLG={3} $paddingY={false}>
        {Array.isArray(state.data)
          ? state.data
              .filter((c: Country) =>
                c.name.common.toLowerCase().includes(filter.toLowerCase())
              )
              .map((c: Country) => (
                <CountryCard
                  key={uuidv4()}
                  country={c}
                  onClick={() => {
                    setSelectedCountry(c);
                    router.push({
                      pathname: "/detail/[name]",
                      query: { name: c.name.common },
                    });
                  }}
                />
              ))
          : null}
      </Grid>
    </React.Fragment>
  );
};

export default Home;
