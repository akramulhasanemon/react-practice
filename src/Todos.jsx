import { use } from "react"
import Todo from "./Todo";

export default function Todos({todoPromise}){

const todos=use(todoPromise);
console.log(todos)

    return(
        <div>
            <h2>Todo connection:{todos.length}</h2>
            {
               todos.map(todo=><Todo todo={todo}></Todo>)
            }
        </div>
    )
}