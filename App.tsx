import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dasturlar" element={<Programs />} />
          <Route path="afzalliklar" element={<Features />} />
          <Route path="biz-haqimizda" element={<About />} />
          <Route path="aloqa" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;