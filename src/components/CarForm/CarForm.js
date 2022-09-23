import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import css from './CarForms.module.css'
import {carService} from "../../services";
import {carValidator} from "../../validators";

const CarForm = ({setCars, carUpdate, setCarUpdate}) => {

    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(carValidator),
        mode: "all"
    });

    useEffect(() => {

        if (carUpdate) {
            setValue('model', carUpdate.model, {shouldValidate: true});
            setValue('price', carUpdate.price, {shouldValidate: true});
            setValue('year', carUpdate.year, {shouldValidate: true});
        }
    }, [carUpdate, setValue])

    const onSubmit = async (car) => {
        if (carUpdate) {
            const {data} = await carService.updateCar(carUpdate.id, car);
            setCars((cars)=> {
                const findCars = cars.find(value => value.id === carUpdate.id);
                Object.assign(findCars, data);
                setCarUpdate(null);
                return [...cars];
            })
        } else {
            const {data} = await carService.createCar(car);
            setCars(cars => [...cars, data])
        }
        reset();
    };




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

                <button className={css.button} disabled={!isValid}>{carUpdate ? 'update' : 'save'}</button>

            </form>

        </div>
    );
};

export {CarForm};