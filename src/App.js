import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Toppicks from './components/Toppicks/Toppicks';
import Findus from './components/Findus/Findus';
import {BrowserRouter ,Routes, Route} from "react-router-dom";
// import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/ourtoppicks" element={<Toppicks/>}></Route>
          <Route path="/findus" element={<Findus/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
