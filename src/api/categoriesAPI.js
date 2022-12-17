import axios from "axios";
import { baseUrls } from "./urls";


export const categoriesAPI = async () => await axios.get(`${baseUrls.categoriesUrl}`);
