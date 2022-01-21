import React from "react";
import useApp from "./hook";
import Layout from "../Layout";

const App = () => {
    /*
    const {
        editedCount,
        handleCreateNewTodo,
        handleNewInputChange,
        newTodoInput,
        todos,
        handleSelectTodo,
        selectedTodoId,
    } = useApp();

    */

    return (
        <Layout>
            <></>
        </Layout>
    );

    {
        /*
        <div>
            <div>Count:{editedCount}</div>
            <form onSubmit={handleCreateNewTodo}>
                <label htmlFor="new-todo">Add new:</label>
                <input
                    onChange={handleNewInputChange}
                    id="new-todo"
                    value={newTodoInput}
                />
                <button type="submit">Create</button>
            </form>
            <div>
                <h2>Todos</h2>
                <ul>
                    {todos.map((todo, i) => (
                        <li
                            key={i}
                            onClick={handleSelectTodo(todo.id)}
                            style={
                                todo.id === selectedTodoId
                                    ? { color: "green" }
                                    : {}
                            }
                        >
                            {todo.desc}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
                        */
    }
};

export default App;
