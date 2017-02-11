import { observable } from 'mobx'

export interface ITodoItem {
    title: string
    finished: boolean
    id: number
    switch(): void
    edit(newTitle: string): void
}

export class TodoItem {
    public id: number = Math.random()
    @observable public finished: boolean = false
    constructor( @observable public title: string = '') {

    }
    public switch() {
        this.finished = !this.finished
    }
    public edit(newTitle: string) {
        this.title = newTitle
    }

}