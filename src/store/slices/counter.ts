import { createSlice } from "@reduxjs/toolkit";
import todosSlice from "./todos";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {},
    extraReducers: {
        [todosSlice.actions.create.type]: (state) => state + 1,
        [todosSlice.actions.edit.type]: (state) => state + 1,
        [todosSlice.actions.toggle.type]: (state) => state + 1,
        [todosSlice.actions.remove.type]: (state) => state + 1,
    },
});

export default counterSlice;
