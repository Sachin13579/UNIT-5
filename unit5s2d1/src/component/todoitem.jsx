export const Todoitem=({todo,handleStatus,DeleteStatus})=>{
    return (
       
        <div className="todolist">
           
             {todo.title}-{todo.status?"Done":"Not Done"}{""} 
             <button className="togglebtn" onClick={()=>handleStatus(todo.id)}>Toggle</button>
           
             </div>
    )
}