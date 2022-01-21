import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const selectedTodoSlice = createSlice({
    name: "selectedTodo",
    initialState: null as string | null,
    reducers: {
        select: (state, { payload }: PayloadAction<{ id: string }>) =>
            payload.id,
    },
});

export default selectedTodoSlice;
