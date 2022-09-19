import {axiosService} from "./axios.service";
import {urls} from "../configs";

export const postService = {
    postId: (id) => axiosService.get(`${urls.users}${id}/${urls.posts}`),

}