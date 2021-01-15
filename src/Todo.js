import React from 'react';
import { observer } from 'mobx-react-lite';
import todoList from './store/todo-list';
import "./Todo.css"

const Todo = observer(() => {

    return (
        <div className="todo">
            <button onClick={() => todoList.fetchTodo()}>Fetch</button>
            {todoList.todos.map((el) => {
                return (
                    <div className="todo-item" key={el.id}>
                        <h1>{el.title}</h1>
                        <button
                            onClick={() => todoList.removeTodo(el.id)}>
                            X
                        </button>
                        <input type="checkbox"
                            checked={el.isComplete} onChange = {() => todoList.completeTodo(el.id)} />
                    </div>
                )
            })
            }
        </div>

    )
});

export default Todo;