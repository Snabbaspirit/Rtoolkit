import { configureStore } from "@reduxjs/toolkit";
import boxInfoReducer from "../features/boxInfoSlice";
import editorReducer from "../features/editorSlice";


export const store = configureStore({
    reducer: {
        boxInfo: boxInfoReducer,
        editor: editorReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;