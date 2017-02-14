import { TodoListView } from './component/TodoListView'
import { TodoHeaderView } from './component/TodoHeaderView'
import { TodoFooterView } from './component/TodoFooterView'
import { observer, inject } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

const App = observer(({stores}: { stores: any }) => {
    console.log(stores);
    return <div>
        <TodoHeaderView todos={stores} />
        <TodoListView todoList={stores} />
        <TodoFooterView stores={stores} />
        <DevTools />
    </div>
}
)
export default App