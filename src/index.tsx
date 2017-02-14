import App from './App'
import * as ReactDOM from 'react-dom'
import { TodoList } from './store/TodoList'
import { TodoItem } from './model/TodoItem'
import { Provider } from 'mobx-react'
const stores = new TodoList()

stores.todos.push(
    new TodoItem("Get Coffee"),
    new TodoItem("Write simpler code")
)
stores.todos[0].finished = true
ReactDOM.render(
    <div>
        <Provider stores={stores}>
            <App stores={stores}/>
        </Provider>
    </div>,
    document.getElementById('root')
)