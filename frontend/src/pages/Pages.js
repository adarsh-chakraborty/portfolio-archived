import React, { useContext } from 'react';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import Login from './Login';
import AppContext from '../context/app-context';

const Pages = () => {
  const ctx = useContext(AppContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Pages;
