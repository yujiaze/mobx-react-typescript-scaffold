import { TodoListView } from './component/TodoListView'
import * as ReactDOM from 'react-dom'
import { TodoList } from './store/TodoList'
import { TodoItem } from './model/TodoItem'
const store = new TodoList()

store.todos.push(
    new TodoItem("Get Coffee"),
    new TodoItem("Write simpler code")
)
store.todos[0].finished = true
ReactDOM.render(<TodoListView todoList={store} />, document.getElementById('root'))