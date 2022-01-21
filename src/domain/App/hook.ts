import React, {
    ChangeEvent,
    FormEvent,
    useReducer,
    useEffect,
    useRef,
} from "react";
import {
    createTodoActionCreator,
    editTodoActionCreator,
    toggleTodoActionCreator,
    deleteTodoActionCreator,
    selectTodoActionCreator,
} from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../store/types";

const useApp = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: State) => state.todos);
    const selectedTodoId = useSelector((state: State) => state.selectedTodo);
    const editedCount = useSelector((state: State) => state.counter);
    const editInput = useRef<HTMLInputElement>(null);

    const [appData, dispatchAppData] = useReducer(
        (state: object, payload: any) => ({ ...state, ...payload }),
        {
            newTodoInput: "",
            editTodoInput: "",
            isEditMode: false,
        }
    );

    const { newTodoInput, editTodoInput, isEditMode } = appData;

    const selectedTodo =
        (selectedTodoId && todos.find((todo) => todo.id === selectedTodoId)) ||
        null;

    const handleNewInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        dispatchAppData({ newTodoInput: e.target.value });
    };

    const handleEditInputChange = (e: ChangeEvent<HTMLFormElement>): void => {
        dispatchAppData({ editTodoInput: e.target.value });
    };

    const handleCreateNewTodo = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!newTodoInput.length) return;

        dispatch(createTodoActionCreator({ desc: newTodoInput }));
        dispatchAppData({ newTodoInput: "" });
    };

    const handleSelectTodo = (todoId: string) => (): void => {
        dispatch(selectTodoActionCreator({ id: todoId }));
    };

    const handleEdit = (): void => {
        if (!selectedTodo) return;

        dispatchAppData({ editTodoInput: selectedTodo.desc });
        dispatchAppData({ isEditMode: true });
    };

    useEffect(() => {
        if (isEditMode) {
            editInput?.current?.focus();
        }
    }, [isEditMode]);

    const handleUpdate = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (!editTodoInput.length || !selectedTodoId) {
            handleCancelUpdate();
            return;
        }

        dispatch(
            editTodoActionCreator({ id: selectedTodoId, desc: editTodoInput })
        );
        dispatchAppData({ isEditMode: false });
        dispatchAppData({ editTodoInput: "" });
    };

    const handleCancelUpdate = (
        e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void => {
        e?.preventDefault();
        dispatchAppData({ isEditMode: false });
        dispatchAppData({ editTodoInput: "" });
    };

    const handleToggle = (): void => {
        if (!selectedTodoId || !selectedTodo) return;

        dispatch(
            toggleTodoActionCreator({
                id: selectedTodoId,
                isComplete: !selectedTodo.isComplete,
            })
        );
    };

    const handleDelete = (): void => {
        if (!selectedTodoId) return;

        dispatch(deleteTodoActionCreator({ id: selectedTodoId }));
    };
    return {
        editedCount,
        handleCreateNewTodo,
        handleNewInputChange,
        newTodoInput,
        todos,
        handleSelectTodo,
        selectedTodoId,
    };
};

export default useApp;
