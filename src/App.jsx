import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Product from './page/Product'
import Login from './page/Login'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;