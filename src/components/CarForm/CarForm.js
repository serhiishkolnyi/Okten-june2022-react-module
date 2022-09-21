import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import css from './CarForms.module.css'
import {carService} from "../../services";
import {carValidator} from "../../validators";

const CarForm = ({setCars, carUpdate}) => {

    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(carValidator),
        mode: "all"
    });

    const {id, model, price, year} = carUpdate;

    const onSubmit = async (car) => {
        if (id) {
            const {data} = await carService.updateCar(id, car);
            setCars(cars => [...cars, data])
            reset();
        } else {
            const {data} = await carService.createCar(car);
            setCars(cars => [...cars, data])
            reset();
        }
    };

    useEffect(() => {
        setValue('model', model);
        setValue('price', price);
        setValue('year', year);

    }, [id])


    return (
        <div className={css.carFormContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className={css.input} type="text"
                       placeholder={'model'} {...register('model')} />
                {errors.model && <span>{errors.model.message}</span>}

                <input className={css.input} type="text"
                       placeholder={'price'} {...register('price', {valueAsNumber: true})} />
                {errors.price && <span>{errors.price.message}</span>}

                <input className={css.input} type="text"
                       placeholder={'year'} {...register('year', {valueAsNumber: true})} />
                {errors.year && <span>{errors.year.message}</span>}

                <button className={css.button} disabled={!isValid}>{id ? 'update' : 'save'}</button>

            </form>

        </div>
    );
};

export {CarForm};