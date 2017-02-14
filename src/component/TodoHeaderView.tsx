import * as React from 'react'
import { ITodoList } from '../store/TodoList'
import { observer } from 'mobx-react'


export const TodoHeaderView = observer(({todos}: { todos: any }) => {
    function _onKeyDown(e) {
        if (e.keyCode == 13) {
            todos.add(e.target.value)
            e.target.value = ''
        }
    }

    function _onClick(e) {
        todos.switchAll(_checked)
        _checked = !_checked
    }
    return (
        <div>
            <span onClick={_onClick}>swtich</span>
            <input type='text' onKeyDown={_onKeyDown} />
        </div>
    )
})
let _checked = true
