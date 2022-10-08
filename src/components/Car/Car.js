import React from 'react';
import {useDispatch} from "react-redux";

import css from './Car.module.css'
import {carActions} from "../../redux";

const Car = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div className={css.carContainer}>
            <div>
                <p>id: {id}</p>
                <h4>model: {model}</h4>
                <p>price: {price}$</p>
                <p>year: {year}</p>
            </div>
            <div>
                <button onClick={()=> dispatch(carActions.setCurrentCar(car))}>update</button>
                <button onClick={()=> dispatch(carActions.deleteById(id))}>delete</button>
            </div>
        </div>
    );
};

export {Car};