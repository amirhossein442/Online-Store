import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Nav } from './Component/Nav';
import { Shop } from './Pages/Shop';
import { Card } from './Pages/Card'; 
import React, { useState } from 'react'
import { Welcom } from './Component/welcom';
import { ShopContextProvider } from './Context/ShopContext';



function App() {
  

  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Nav/>
        <Welcom/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/card' element={<Card/>}></Route>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
