import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Product from './page/Product'
import Login from './page/Login'
import styled from 'styled-components'

const App = () => {
  return (
    <Page>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    </Page>

  );
};

const Page = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

export default App;