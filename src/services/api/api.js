import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

const api = axios.create({
  baseURL: BASE_URL,
});

export { api };
