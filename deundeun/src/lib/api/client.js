import { ACCESS_TOKEN } from "constants/index";
import axios from "../../../node_modules/axios/index";

const client = axios.create();

client.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem(ACCESS_TOKEN);

export default client;