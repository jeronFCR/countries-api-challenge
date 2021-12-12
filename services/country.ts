import axios, { AxiosResponse } from "axios";

import { Country } from "../interfaces/country";

const countryApi = axios.create({ baseURL: "https://restcountries.com/v3.1" });

export const getAll = (): Promise<AxiosResponse<Array<Country>, any>> =>
  countryApi.get("/all");
