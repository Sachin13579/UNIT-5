import { useState } from "react"
import "./todoinput.css"
export const Todoinput=({getdata})=>{
    const[text,setText]=useState("")
  return( 
       <div className="todo">
       <input className="Input_box" onChange={(e)=>{
           setText(e.target.value)
       }} type="text" placeholder=" Enter Todo" />
       <button className="Button" onClick={()=>{
           getdata(text)
       }}>Add to do</button>
      
       </div>
  )
}
