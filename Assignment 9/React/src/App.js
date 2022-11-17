import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Switch} from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Jobs from './pages/Jobs';
import Card from './components/card'
import Navbar from './components/navbar'
import Login from './pages/login';

function App() {
  return (
    <Router>

      {/* <nav>
        <Link to = '/'>Home</Link> {" "}
        <Link to = '/AboutUs'>AboutUs</Link> {" "}
        <Link to = '/Contact'>Contact</Link> {" "}
        <Link to = '/Jobs'>Jobs</Link> {" "}
      </nav> 

      <Routes> */}
        {/* <Route exact path="/" element={<Login />} />
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Jobs' element={<Jobs />}></Route>
      </Routes> */}
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Jobs' element={<Jobs />}></Route>
        <Route path='/Home' element={<Home />}>
        </Route>
      </Routes>


      {/* <Navbar/> */}
    

      {/* <Login/> */}
    </Router>
  );
}

export default App;
