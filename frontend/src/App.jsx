// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../loginsignup/loign';
   
const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> Home page */}
        <Route path="/login" element={<Login/>}/>
       </Routes>
    </Router>
  );
};

export default App;
