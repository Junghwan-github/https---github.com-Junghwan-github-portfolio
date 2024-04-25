import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Intro from './components/pages/Intro';
import Me from './components/pages/Me';
import Skills from './components/pages/Skills';
import Portfolio from './components/pages/Portfolio';


const App = () => {
  return (
    <BrowserRouter>
      <Header attr={"header__wrap"} />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/me" element={<Me />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer attr={"footer__wrap"} />
    </BrowserRouter>
  );
};
export default App;
