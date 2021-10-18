import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface BoxInfoState {
    value: string[]
}

const initialState: BoxInfoState = {
    value: []
}

export const boxInfoSlice = createSlice({
    name: "boxInfo",
    initialState,
    reducers: {
        addBoxInfo: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        },
        removeBoxInfo: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1)
        }
    }
});

export const { addBoxInfo, removeBoxInfo } = boxInfoSlice.actions

export default boxInfoSlice.reducer;