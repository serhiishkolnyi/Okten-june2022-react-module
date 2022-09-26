import {axiosService} from "./axios.services";

import {urls} from "../configs";

const todosService = {
    getAll: () => axiosService.get(urls.todos),

}

export {todosService};