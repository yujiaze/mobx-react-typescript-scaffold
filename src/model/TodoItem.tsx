import { observable } from 'mobx'

export interface ITodoItem {
    title: string
    finished: boolean
    id: number
    switch(): void
    edit(newTitle: string): void
}

export class TodoItem {
    public readonly id: number = TodoItem.generateId()
    @observable 
    public finished: boolean = false
    @observable 
    public title: string = ''
    constructor(title) {
        this.title = title
    }
    public switch() {
        this.finished = !this.finished
    }
    public edit(newTitle: string) {
        this.title = newTitle
    }
    static _id = 0
    static generateId(): number {
        return TodoItem._id++
    }
}