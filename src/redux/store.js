import { configureStore } from "@reduxjs/toolkit";
import formReducer from './slice/formSlice'


export const store = configureStore({
    reducer : {
       form : formReducer,
        
    },
})