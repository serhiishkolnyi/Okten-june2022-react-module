import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    currentCar: null,
    loading: false,
    error: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {

        try {
            const {data} = await carService.getAll();
            return data;

        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, {rejectedWithValue}) => {
        try {
            const {data} = await carService.createCar(car);
            return data;

        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
);

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id, car}, {rejectedWithValue}) => {
        try {
            const {data} = await carService.updateCar(id, car);
            return data;

        } catch (e) {
            return rejectedWithValue(e.response.data);
        }
    }
)

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async (id, {rejectWithValue}) => {

        try {
            const {data} = await carService.deleteCar(id);
            return data;

        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const carSlice = createSlice({

        name: 'carSlice',
        initialState,

        reducers: {
            setCurrentCar: (state, action) => {
                state.currentCar = action.payload
            },
        },

        extraReducers: builder =>
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    state.cars = action.payload;
                    state.loading = false;
                })
                .addCase(getAll.rejected, (state, action) => {
                    state.error = action.payload;
                    state.loading = false;
                })
                .addCase(getAll.pending, (state) => {
                    state.loading = true;
                })
                .addCase(deleteById.fulfilled, (state, action) => {
                    const index = state.cars.findIndex(car => car.id === action.payload);
                    state.cars.splice(index, 1);
                })
                .addCase(createCar.fulfilled, (state, action) => {
                    state.cars.push(action.payload);
                })
                .addCase(updateCar.fulfilled, (state, action) => {
                    const findCars = state.cars.find(value => value.id === action.payload.id);
                    Object.assign(findCars, action.payload);
                    state.currentCar = null;

                })

    }
);

const {reducer: carReducer, actions: {setCurrentCar}} = carSlice;

const carActions = {
    getAll,
    deleteById,
    createCar,
    updateCar,
    setCurrentCar
};

export {
    carReducer,
    carActions
};