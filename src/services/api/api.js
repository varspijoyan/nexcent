import axios from "axios";

const BASE_URL = "https://armbionicsapi.annaniks.com";

const api = axios.create({
  baseURL: BASE_URL,
});

export { api };
