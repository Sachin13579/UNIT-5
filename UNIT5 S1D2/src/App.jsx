// import logo from './logo.svg';
import e from 'express';
import './App.css';

function App() {
  // const operetingSystem = ["Android","Blackberry","Iphone","Windows Phone"];
  // const Mobile = ["Samsung","HTC","Micromax","Apple"];
  const Data = [
    {
      Title: "Mobile Operatiing System",
      List:["Android","Blackberry","Iphone","Windows Phone"],
    },
    {
      Title: "Mobile Manufacture",
      List:["Samsung","HTC","Micromax","Apple"],
    }
  ]
  
  const links=["Services","Projects","About"]
  return (
    <div className="App">
      <nav className='navbar' >
        <div>
         <Logo data={"LOGOBAKERY"}/>
        </div>
        <div className='link'>
          
            {links.map((e)=>{
              return<Links link={e}/>
            })}
        

        </div>
        <div className='btn'>
        <Button data={"contact"}/>
        </div>
        
      </nav>
     {Data.map((e)=>{
     return <Shop title={e.title} list={e.list}/>
     })}
        
    </div>
  );
};
// component
// function Oper(data){
//   return <li>{data.oper}</li>
// }

function Shop({Title,List}){
  return <>
  <h2>{Title}</h2>
  <ul>{List.map((e)=>{
    return <li>{e}</li>
  })}</ul>
  </>
}
function Logo(Data){
  return <h3>{Data.data}</h3>
}

function Links(links){
  return <a>{links.link}</a>
}
function Button(Data){
  return <button>{Data.data}</button>
}
export default App;