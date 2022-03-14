import axios from "axios";
import { API_HOST } from "./constants";

export default axios.create({
  baseURL: API_HOST,
});
