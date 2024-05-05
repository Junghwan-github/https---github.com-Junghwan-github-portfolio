import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Intro from "./components/pages/Intro";
import AboutMe from "./components/pages/AboutMe";
import Skills from "./components/pages/Skills";
import Portfolio from "./components/pages/Portfolio";
import "./App.css";




const App = () => {


  return (
    <Router basename="/portfolio">
      <Header attr={"header__wrap"} />
      <ContentTransition />
      <Footer attr={"footer__wrap"} />
    </Router>
  );
};

const ContentTransition = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group-wrap">
      <CSSTransition key={location.key} classNames="page" timeout={300}> 
          <Routes location={location}>
            <Route path="/" element={<Intro />} />
            <Route path="/me" element={<AboutMe />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolios" element={<Portfolio />} />
          </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
