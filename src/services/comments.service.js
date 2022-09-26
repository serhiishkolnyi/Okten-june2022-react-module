import {axiosService} from "./axios.services";
import {urls} from "../configs";

const commentsService = {
    getAll: () => axiosService(urls.comments),
};

export {commentsService};