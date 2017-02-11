import { TodoItem, ITodoItem } from '../model/TodoItem'
import * as React from 'react'
import { observer } from 'mobx-react'
import { ITodoList } from '../store/TodoList'




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
export class TodoListView extends React.Component<{ todoList: ITodoList<ITodoItem> }, {}>{
    public constructor(props: ITodoList<ITodoItem>) {
        super(props)
    }
    public render() {
        return (
            <div>
                <ul>
                    {
                        this.props.todoList.todos.map(todo => (
                            <TodoItemView todo={todo} key={todo.id} />
                        ))
                    }
                </ul>
                Tasks Left : {this.props.todoList.unfinishedTodoCount}
            </div>
        )
    }
}
