import {axiosService} from "./axios.service";

import {urls} from "../configs";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    createCar: (car) => axiosService.post(urls.cars, car),
    deleteCar: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateCar: (id, car) => axiosService.put(`${urls.cars}/${id}`, car),
    carId: (id) => axiosService.get(`${urls.cars}/${id}`)
};

export {carService};