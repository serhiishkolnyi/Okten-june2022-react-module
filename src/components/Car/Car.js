import React from 'react';

import css from './Car.module.css'
import {carService} from "../../services";

const Car = ({car, setCars, setCarUpdate}) => {
    const {id, model, price, year} = car;

    const deleteCar = async (id) => {
        await carService.deleteCar(id);
        setCars(cars => {
            const carId = cars.findIndex(value => value.id === id);
            cars.splice(carId, 1);
            return [...cars];
        });

    };

    const updateCar = () => {
        setCarUpdate(car);
    }
    return (
        <div className={css.carContainer}>
            <div>
                <p>id: {id}</p>
                <h4>model: {model}</h4>
                <p>price: {price}$</p>
                <p>year: {year}</p>
            </div>
            <div>
                <button onClick={() => updateCar()}>update</button>
                <button onClick={() => deleteCar(id)}>delete</button>
            </div>
        </div>
    );
};

export {Car};