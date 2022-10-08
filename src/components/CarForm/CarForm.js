import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import css from './CarForms.module.css'
import {carValidator} from "../../validators";
import {carActions} from "../../redux";

const CarForm = () => {

    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({
        resolver: joiResolver(carValidator),
        mode: "all"
    });

    const dispatch = useDispatch();
    const {currentCar} = useSelector(state => state.carReducer);
    console.log(currentCar)

    useEffect(() => {

        if (currentCar) {
            setValue('model', currentCar.model, {shouldValidate: true});
            setValue('price', currentCar.price, {shouldValidate: true});
            setValue('year', currentCar.year, {shouldValidate: true});
        }
    }, [currentCar])

    const onSubmit = async (car) => {

        if (currentCar !== null) {
            const id = currentCar.id;
            dispatch(carActions.updateCar({id, car}));

        } else {
            dispatch(carActions.createCar({car}));
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

                <button className={css.button} disabled={!isValid}>{currentCar ? 'update' : 'save'}</button>

            </form>

        </div>
    );
};

export {CarForm};