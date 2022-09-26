import {axiosService} from "./axios.services";

import {urls} from "../configs";

const albumsService = {
    getAll: () => axiosService.get(urls.albums),
};

export {albumsService};