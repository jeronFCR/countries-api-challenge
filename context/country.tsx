import React, { useState } from "react";

import { Country } from "../interfaces/country";
import * as Endpoints from "../services/country";
import * as Actions from "../store/actions/country";
import {
  reducer as countryReducer,
  initialState as initialArgs,
} from "../store/reducers/country";
import { dispatchersFromActions } from "./util";

export const SummaryApiContext = React.createContext<Partial<any>>({});

const actionNames = ["getAll"];

export const useSummaryCountry = () => React.useContext(SummaryApiContext);

export const SummaryCountryProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(countryReducer, initialArgs);
  const [selectedCountry, setSelectedCountry] = useState<Country>();

  const dispatcherMap = React.useMemo(
    () => dispatchersFromActions(Endpoints, Actions, dispatch, actionNames),
    [dispatch]
  );

  return (
    <SummaryApiContext.Provider
      value={{ state, selectedCountry, setSelectedCountry, ...dispatcherMap }}
    >
      {children}
    </SummaryApiContext.Provider>
  );
};
