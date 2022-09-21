import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [carUpdate, setCarUpdate] = useState({});

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data));

    }, [cars]);

    return (
        <div>
            <CarForm setCars={setCars} carUpdate={carUpdate}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} setCars={setCars} setCarUpdate={setCarUpdate}/>)}
        </div>
    );
};

export {Cars};