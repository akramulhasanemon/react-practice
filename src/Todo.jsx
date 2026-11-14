export default function Todo({todo}){

    return(
        <div className="card">
            <p>{todo.id}</p>
            <p>{todo.title}</p>
        
        </div>
    )
}