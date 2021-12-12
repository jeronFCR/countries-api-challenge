import { AxiosError, AxiosResponse } from "axios";
import {
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
} from "../actions/types/country";

export const initialState = {
  data: [],
  error: {},
  loading: false,
  status: 0,
  statusText: "",
};

export const reducer = (state = initialState, action: any) => {
  const { type, response, error } = action;
  switch (type) {
    case GET_COUNTRIES_REQUEST:
      return { ...state, loading: true };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        data: response.data,
        error: {},
        loading: false,
        status: response.status,
        statusText: response.statusText,
      };
    case GET_COUNTRIES_FAIL:
      return {
        ...state,
        error: { ...error.response?.data },
        loading: false,
        status: error.response?.status || error.name,
        statusText: error.response?.statusText || error.message,
      };
    default:
      return state;
  }
};

export default reducer;
