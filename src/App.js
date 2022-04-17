//import logo from './logo.svg';
import "./App.css";
// import { useState, createContext, useReducer, useContext, useEffect } from 'react';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PreEvent from "./components/PreEvent/PreEvent";
import Header from "./components/Header/Header";
import PostEvent from "./components/PostEvent/PostEvent";
import {EventList} from "./components/EventList/EventList"
import EventDetail from "./components/EventDetail/EventDetail";
import Analytics from "./components/analytics/Analytics";
const Routing = () =>{
  return(
<div>
    
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pre-event" element={<PreEvent />} />
        <Route path="/post-event" element={<PostEvent/>} />
        <Route path="/events" element={<EventList/>} />
        <Route path="/eventdetail" element={<EventDetail/>} />
        <Route path="/analytics" element={<Analytics/>} />
      </Routes>
    </Router>
    </div>
  );
  
}


function App() {

  return (
   
    <div className="App">
      <Header/>
      <Routing/>
    </div>
  
  );
}

export default App;
