import axios from "axios";
import { BASE_URL } from "../constants/ApiConstants";


// no auth token required
export const getAPI = async (url, body) => {
  const response = await axios.get(`${BASE_URL}${url}`, body, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
    },
  });
  return response;
};

// auth token required
export const getAPIAuth = async (url) => {
    const token = localStorage.getItem(TOKEN_NAME);
  try {
    const response = await axios.get(`${BASE_URL}${url}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    return error;
  }
};

// no auth token required
export const postAPI = async (url, params) => {
  const response = await axios.post(`${BASE_URL}${url}`, params, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
    },
  });
  return response;
};

// auth token required
export const postAPIAuth = async (url, params) => {
    const token = localStorage.getItem(TOKEN_NAME);
    const response = await axios.post(`${BASE_URL}${url}`, params, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  };