import { TodoView } from './TodoView'
import * as ReactDOM from 'react-dom'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
const store = new TodoList()

store.todos.push(
    new TodoItem("Get Coffee"),
    new TodoItem("Write simpler code")
)
store.todos[0].finished = true
ReactDOM.render(<TodoView todoList={store} />, document.getElementById('root'))