import { AxiosResponse } from "axios";

import {
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
} from "./types/country";

export const getAll = () => ({
  type: GET_COUNTRIES_REQUEST,
});

export const getAllSuccess = (response: AxiosResponse) => ({
  response,
  type: GET_COUNTRIES_SUCCESS,
});

export const getAllFail = (error: AxiosResponse) => ({
  error,
  type: GET_COUNTRIES_FAIL,
});
