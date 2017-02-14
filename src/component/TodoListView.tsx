import { TodoItem, ITodoItem } from '../model/TodoItem'
import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { ITodoList, FILTER } from '../store/TodoList'




const TodoItemView = observer(({todo}: { todo: ITodoItem }) => {
    return <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />
        {todo.title}
    </li>

})

@observer
export class TodoListView extends React.Component<{ todoList: any }, {}>{
    public constructor(props) {
        super(props)
    }
    public render() {
        return (
            <div>
                <ul>
                    {this.generateTodos()}
                </ul>
            </div>
        )
    }
    private generateTodos() {
        switch (this.props.todoList.filter) {
            case FILTER.ALL:
                return this.props.todoList.todos.map(todo =>
                    <TodoItemView todo={todo} key={todo.id} />
                )
            case FILTER.ACTIVE:
                return this.props.todoList.todos.filter(todo => todo.finished == false).map(todo =>
                    <TodoItemView todo={todo} key={todo.id} />
                )
            case FILTER.COMPLETED:
                return this.props.todoList.todos.filter(todo => todo.finished == true).map(todo =>
                    <TodoItemView todo={todo} key={todo.id} />
                )
        }
    }
}
