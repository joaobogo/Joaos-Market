import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import Home from './pages/Home';
import Product from './pages/Product';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/:id' element={<Product/>} />
        <Route exact path='/checkout' element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
