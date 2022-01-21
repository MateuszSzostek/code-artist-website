export interface ITodo {
    id: string;
    desc: string;
    isComplete: boolean;
}

export interface State {
    todos: ITodo[];
    selectedTodo: string | null;
    counter: number;
}
