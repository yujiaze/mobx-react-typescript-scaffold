import { observable, computed } from 'mobx'
import { ITodoItem, TodoItem } from '../model/TodoItem'


export interface ITodoList<T> {
    todos: Array<T>
    unfinishedTodoCount: number
}


export class TodoList<T extends ITodoItem> implements ITodoList<ITodoItem> {
    @observable todos: Array<T> = []
    @computed get unfinishedTodoCount(): number {
        return this.todos.filter(todo => !todo.finished).length
    }
    switchAll(checked: boolean) {
        this.todos.map(todo => todo.finished = checked)
    }
    delete(todo) {
        let idx = this.todos.indexOf(todo)
        this.todos.splice(idx, 1)
    }
    add(title: string) {
        this.todos.push(new TodoItem(title))
    }
}