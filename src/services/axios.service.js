import axios from "axios";

import {baseURL} from "../configs";

export const axiosService = axios.create({baseURL});


