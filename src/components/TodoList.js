import TodoListItem from "./TodoListItem";
import './TodoList.scss';
import cn from 'classnames';

function TodoList(props){
    return(
        <div className="TodoList">
            {
                props.todos.map(todo => {
                    return <TodoListItem todo={todo} key={todo.id} onRemove={props.onRemove} onToggle={props.onToggle} />
                })
            }
        </div>
    )
}

export default TodoList;