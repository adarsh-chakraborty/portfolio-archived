import React, { useContext } from 'react';
import Home from './Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import Projects from './Projects';
import Login from './Login';
import AppContext from '../context/app-context';
import Dashboard from './Dashboard';
import NewProject from './NewProject';
import EditProject from './EditProject';
import Error404 from './Error404';
import Contact from './Contact';

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const PublicRouteOnly = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

const Pages = () => {
  const ctx = useContext(AppContext);
  console.log(ctx);
  console.log('You are logged in', ctx.isLoggedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={
            <PublicRouteOnly isLoggedIn={ctx.isLoggedIn}>
              <Login />
            </PublicRouteOnly>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={ctx.isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/new"
          element={
            <ProtectedRoute isLoggedIn={ctx.isLoggedIn}>
              <NewProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/project/:projectId/edit"
          element={
            <ProtectedRoute isLoggedIn={ctx.isLoggedIn}>
              <EditProject />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default Pages;
