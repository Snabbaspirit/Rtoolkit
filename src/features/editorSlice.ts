import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface EditorState {
    value: IEditor[]
}

interface IEditor {
    id: string;
    name: string;
    label: string[];
}

const initialState: EditorState = {
    value: []
}

export const editorSlice = createSlice({
    name: "editor",
    initialState,
    reducers: {
    }
});

export const {} = editorSlice.actions

export default editorSlice.reducer;