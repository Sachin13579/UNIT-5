// import logo from './logo.svg';
import './App.css';

function App() {
  const operetingSystem = ["Android","Blackberry","Iphone","Windows Phone"];
  const Mobile = ["Samsung","HTC","Micromax","Apple"];
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
      <h2>Operating System </h2>
        <ul>
          {operetingSystem.map((e)=>{
            return <Oper oper={e}/>
          })}
        </ul>
        <h2>Mobile </h2>
        <ul>
          {Mobile.map((e)=>{
            return <Oper oper={e}/>
          })}
        </ul>
    </div>
  );
};
// component
function Oper(data){
  return <li>{data.oper}</li>
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