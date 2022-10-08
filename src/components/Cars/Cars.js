import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";
import {carActions} from "../../redux";

const Cars = () => {

    const dispatch = useDispatch();
    const {cars, loading, error} = useSelector(state => state.carReducer);

    useEffect(() => {
        dispatch(carActions.getAll());

    }, []);

    return (
        <div>
            <CarForm/>
            <hr/>
            {loading && <div>loading .....</div>}
            {error && <div>{error}</div>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};