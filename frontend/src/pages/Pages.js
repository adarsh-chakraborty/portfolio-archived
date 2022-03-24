import React from 'react';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Projects from './Projects';

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default Pages;
