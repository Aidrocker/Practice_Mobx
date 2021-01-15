import {makeAutoObservable} from 'mobx';

class TodoList {
    todos = [
        {id: 1, title: 'Make app', isComplete: false},
        {id: 2, title: 'Drink Coffe', isComplete: true},
        {id: 3, title: 'Hello', isComplete: false},
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(id) {
        this.todos = this.todos.filter((el) => el.id !== id )
    }

    completeTodo(id) {
        this.todos = this.todos.map((el) => el.id === id ? {...el, isComplete: !el.isComplete} : el )    
    }

    fetchTodo() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }
}

export default new TodoList();