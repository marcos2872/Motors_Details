import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyled from './styles/globalStyled';
import Home from './pages/home/Home';
import Motor from './pages/motor/Motor';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="motor/:id" element={<Motor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
