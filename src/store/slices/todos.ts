import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v1 as uuid } from "uuid";
import { todosInitialState } from "../data";

const todosSlice = createSlice({
    name: "todos",
    initialState: todosInitialState,
    reducers: {
        create: {
            reducer: (
                state,
                {
                    payload,
                }: PayloadAction<{
                    id: string;
                    desc: string;
                    isComplete: boolean;
                }>
            ) => {
                state.push(payload);
            },
            prepare: ({ desc }: { desc: string }) => ({
                payload: {
                    id: uuid(),
                    desc,
                    isComplete: false,
                },
            }),
        },
        edit: (
            state,
            { payload }: PayloadAction<{ id: string; desc: string }>
        ) => {
            const todoToEdit = state.find((todo) => todo.id === payload.id);
            if (todoToEdit) {
                todoToEdit.desc = payload.desc;
            }
        },
        toggle: (
            state,
            { payload }: PayloadAction<{ id: string; isComplete: boolean }>
        ) => {
            const index = state.findIndex((todo) => todo.id === payload.id);
            if (index !== -1) {
                state[index].isComplete = payload.isComplete;
            }
        },
        remove: (state, { payload }: PayloadAction<{ id: string }>) => {
            const index = state.findIndex((todo) => todo.id === payload.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export default todosSlice;
