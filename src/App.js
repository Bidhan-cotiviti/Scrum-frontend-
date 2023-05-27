//import './App.css';
//import LoginForm from './Component/Login/login';
//import Home from './Component/Login/Home';
//import Add from './Component/Login/Add';

// const App = () => {
//   return (
//     <Home/>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Component/Login/login';
// import Home from './Component/Login/Home';
import Hometest from './Component/Login/Hometest';
import Hometest1 from './Component/Login/Hometest1';
import Result from './Component/Login/Result';
import Add from './Component/Login/Add';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/hometest" element={<Hometest />} />
        <Route path="/hometest1" element={<Hometest1 />} />
        <Route path="/result" element={<Result />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
};

export default App;


