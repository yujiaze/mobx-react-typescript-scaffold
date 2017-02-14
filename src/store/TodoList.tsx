import { observable, computed, action } from 'mobx'
import { ITodoItem, TodoItem } from '../model/TodoItem'

export enum FILTER {
    ALL = -1,
    ACTIVE = 0,
    COMPLETED = 1
}

export interface ITodoList {
    todos: Array<ITodoItem>
    unfinishedTodoCount: number
    switchAll(checked: boolean): void
    delete(todo: ITodoItem): void
    add(title: string): void
}


export class TodoList implements ITodoList {
    @observable
    todos: Array<ITodoItem> = []
    @observable
    filter: number = FILTER.ALL
    @computed
    get unfinishedTodoCount(): number {
        return this.todos.filter(todo => !todo.finished).length
    }
    @action
    switchAll(checked: boolean) {
        this.todos.map(todo => todo.finished = checked)
    }
    @action
    delete(todo) {
        let idx = this.todos.indexOf(todo)
        this.todos.splice(idx, 1)
    }
    @action
    add(title: string) {
        this.todos.push(new TodoItem(title))
    }
}