import {Todoinput} from "./todoinput"
import {useState}from "react"
import {Todoitem} from "./todoitem"
import {nanoid} from "nanoid"
import "./todoinput.css"
function Todo(){
    const [todoList,setTodoList]=useState([])

   

    const getdata=(todo)=>{
        const payload={
            title:todo,
            status:false,
            id:nanoid(4)
        }
        // console.log("received",todo)
        setTodoList([...todoList,payload])
    }

    const handleStatus=(id)=>{
        console.log("ID",id)

        setTodoList([...todoList.map((e)=>(e.id===id?{...e,status:!e.status}:e))])
    }
    

   return (<div className="main">
       <Todoinput getdata={getdata} />
       {todoList.map((e)=>(<Todoitem handleStatus={handleStatus} todo={e}></Todoitem>)) }
   </div>
      
   )
}

export{Todo}