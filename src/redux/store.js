import { configureStore } from "@reduxjs/toolkit";
import classes from './classesSlice';
import cart from './cartSlice';


export const store = configureStore({
    reducer: {
        classes,
        cart
    },
})