import { ITodo } from "../types";
import { v1 as uuid } from "uuid";

const todosInitialState: ITodo[] = [
    {
        id: uuid(),
        desc: "Topic One",
        isComplete: true,
    },
    {
        id: uuid(),
        desc: "Topic Two",
        isComplete: true,
    },
    {
        id: uuid(),
        desc: "Topic Three",
        isComplete: false,
    },
];

export { todosInitialState };
