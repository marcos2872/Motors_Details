import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyled from './styles/globalStyled';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
