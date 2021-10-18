import { configureStore } from "@reduxjs/toolkit";
import boxInfoReducer from "../features/boxInfoSlice";


export const store = configureStore({
    reducer: {
        boxInfo: boxInfoReducer
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;