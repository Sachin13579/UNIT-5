import { useState } from "react"
export const Todoinput=()=>{
    const[text,setText]=useState("")
  return( 
       <div>
       <input onChange={(e)=>{
           setText(e.target.value)
       }} type="text" placeholder=" Enter Todo" />
       <button>Add to do</button>
       {
           text
       }
       </div>
  )
}
