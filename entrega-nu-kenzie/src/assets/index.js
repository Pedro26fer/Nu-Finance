import axios from "axios";

export const server = axios.create({
  baseURL: "https://api-nu-finance.cyclic.app",
});
