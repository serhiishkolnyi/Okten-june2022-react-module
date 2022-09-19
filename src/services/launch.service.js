import {axiosService} from "./axios.services";
import {urls} from "../configs";

export const launchService = {
    getAll: () => axiosService.get(urls.launches)
}