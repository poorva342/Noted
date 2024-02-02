
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import { About } from './components/About';
import Notestate from './context/Notestate';
import  Alert  from './components/Alert';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { useState } from 'react';


function App() {
  const[alert,setAlert]=useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <div className="App">
      <Notestate>
      <Router>
        <Navbar/>
        <Alert alert={alert}/>
        <div className="conatiner">
        
        <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert} />} />
          <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About />} />
          
        </Routes>
        </div>
        </Router>
        </Notestate>
    </div>
  );
}

export default App;
