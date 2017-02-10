import { observable, computed } from 'mobx'
import { ITodoItem } from './TodoItem'


export interface ITodoList<T> {
    todos: Array<T>
    unfinishedTodoCount: number
}


export class TodoList<T extends ITodoItem> implements ITodoList<ITodoItem> {
    @observable todos: Array<T> = []
    @computed get unfinishedTodoCount(): number {
        return this.todos.filter(todo => !todo.finished).length
    }
}