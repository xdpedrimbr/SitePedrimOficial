import React from 'react';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import './App.css';

import NavBar from './Funcionalidades/NavBar'

import Home from './Pages/Home/index'
import BubuSpeaks from './Pages/BubuSpeaks/index'
import SorteiaTimes from './Pages/SorteiaTimes/index'

function App() {
  return (
    <div className="mx-0 mt-0 mb-3">
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/bubuspeaks" element={<BubuSpeaks />}></Route>
            <Route path="/sorteiatimes" element={<SorteiaTimes />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
