import {axiosService} from "./axios.services";
import {urls} from "../configs";

const postService = {
    postId: (id) => axiosService(`${urls.posts}/${id}`)
};

export {postService};