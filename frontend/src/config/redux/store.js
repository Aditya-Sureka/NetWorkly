import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authReducer"



/** 
 * STEPS FOR STATE MANAGEMENT
 * 1. SUBMIT ACTION
 * 2. HANDLE ACTION IN ITS REDUCER
 * 3. REGISTER HERE -> REDUCER 
 */


export const store = configureStore({
    reducer: {
        auth: authReducer
    }

})