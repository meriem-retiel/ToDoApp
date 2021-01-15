import React from "react"
import Todo from "./Todo"
const TodoList = (props) => {


    return (
        <div>
        
            <ul>
            {
               props.filterTodo.map(item=> (<Todo filterTodo={props.filterTodo} setFilterTodo={props.setFilterTodo} todo={props.todo} setTodo={props.setTodo} item={item} key={item.id} text={item.text}/>))
            }
            </ul>
        </div>
    )
}
export default TodoList;