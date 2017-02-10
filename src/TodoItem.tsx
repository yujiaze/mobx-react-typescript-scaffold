import { observable } from 'mobx'

export interface ITodoItem {
    title: string
    finished: boolean
    id: number
}

export class TodoItem implements ITodoItem {
    id: number = Math.random()
    @observable finished: boolean = false
    @observable title: string = ''
    constructor(title: string) {
        this.title = title
    }
}