// import logo from './logo.svg';
import './App.css';
import { Routes,Route } from "react-router-dom";
import{Home} from "./component/home"
import{About} from "./component/about"
import{Navbar} from "./component/navbar"
import{UserList} from "./component/user.list"
import { Userdetails } from './component/userdetail';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
      
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/User" element={<UserList></UserList>}></Route>
      <Route path="/users/:id" element={<Userdetails></Userdetails>}></Route>
    </Routes>
    </div>
  );
}

export default App;
