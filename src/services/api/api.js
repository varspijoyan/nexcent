const { default: axios } = require("axios");

const BASE_URL = "https://armbionicsapi.annaniks.com/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export { api };
