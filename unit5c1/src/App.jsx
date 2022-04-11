// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [scr , setScr] = useState({
    Score: 76,
    Wicket: 2,
    Ball: 50
   });

   
   function scoreHandler(str,value){
    if(scr.Wicket>=12){
      return
    }
    
    let obj= {};
    obj[str] = scr[str]+value

    let res = {
        ...scr,
        ...obj
    }
    setScr(res);
    if(scr.Score>100){
      return
    }
    
    
}
var wic="";
if(scr.Wicket>=12){
  wic="All out!"
}
var win ="";
if(scr.Score>100){
  win= "Won"
}
  return (
    <div className="App">
      
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              scr.Score
            }
          </h1>
        </div>
        <h3>India:
          {win}
      </h3>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              scr.Wicket
            }
            <h3>wicket:{wic}</h3>
          </h1>
        </div>

        <div>
          Over:{" "}
          Over:{Math.floor(scr.Ball/6)+"."+(scr.Ball%6)}
          <h1 className="overCount">
            
            
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              (scr.Ball)
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{scoreHandler("Score",+1)}}>Add 1</button>
        <button className="addScore4" onClick={()=>{scoreHandler("Score",+4)}}>Add 4</button>
        <button className="addScore6" onClick={()=>{scoreHandler("Score",+6)}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{scoreHandler("Wicket",+1)}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{scoreHandler("Ball",+1)}}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );


}

export default App;