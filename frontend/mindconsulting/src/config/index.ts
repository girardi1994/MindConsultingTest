import axios from "axios";
export const base = "http://192.168.0.113:3000/"

export const instance = axios.create({
  baseURL: base,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 5000,
});
