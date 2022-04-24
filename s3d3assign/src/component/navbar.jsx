import { Link } from "react-router-dom";
export const Navbar=()=>{
    const nav=[
        {title:"Home",to:"/"},
        {title:"About",to:"/about"},
        {title:"User",to:"/user"},
        { title:"cart",to:"/cart"}
    ]
    
    return    <nav  style={{margin:'5px',justifyContent:"space-evenly",
    backgroundColor:"blue",display:"flex"}}>

    {/* {<div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        </div>
    } */}
           {nav.map((e,i)=>(
               < Link key={i} to={e.to} style={{margin:'5px',color:"white"}}>{e.title}</Link>))}
        </nav>
    
}