import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { todosSlice, selectedTodoSlice, counterSlice } from "./slices";

const reducer = {
    todos: todosSlice.reducer,
    selectedTodo: selectedTodoSlice.reducer,
    counter: counterSlice.reducer,
};

export const {
    create: createTodoActionCreator,
    edit: editTodoActionCreator,
    toggle: toggleTodoActionCreator,
    remove: deleteTodoActionCreator,
} = todosSlice.actions;

export const { select: selectTodoActionCreator } = selectedTodoSlice.actions;

const middleware = [logger];

export default configureStore({
    reducer,
    middleware,
});
