import { observer } from 'mobx-react'
import { action } from 'mobx'
import { FILTER } from '../store/TodoList'


export const TodoFooterView = observer(({stores}: { stores: any }) => {
    const _onClick = action(i => (stores.filter = FILTER[i as number]))
    function renderFilterLink() {
        let children = []
        for (let i in FILTER) {
            isNaN(parseInt(i)) && children.push(
                <a onClick={() => { _onClick(i) }} key={i}>
                    {i}
                </a>
            )
        }
        return <div>{children}</div>
    }
    return (
        <div>
            {renderFilterLink()}
            <span>{stores.unfinishedTodoCount + ' items left'}</span>
        </div>
    )
})