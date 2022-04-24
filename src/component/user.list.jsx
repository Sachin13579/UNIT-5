import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
export const UserList=()=>{
    const [user,userstate]=useState([])
    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=2").then(({data})=>{
userstate(data.data)
        })

    },[])
    return(
        <div style={{display:"grid", gridTemplateColumns:"1fr 2fr"}}>
 {user.map((user=>(<p  key={user.id}><Link to={`/users/${user.id}`}>{user.id}.{user.first_name}</Link></p>)))}

        </div>
    )
}