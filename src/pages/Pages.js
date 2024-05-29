import React, { useContext, useEffect } from 'react';
import ReactGA from 'react-ga4';
import Home from './Home';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Projects from './Projects';
import Login from './Login';
import AppContext from '../context/app-context';
import Dashboard from './Dashboard';
import NewProject from './NewProject';
import EditProject from './EditProject';
import Error404 from './Error404';
import Contact from './Contact';
import Messages from './Messages';
import Resume from './Resume';

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
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "location", title: location.search });
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
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
          path="/messages"
          element={
            <ProtectedRoute isLoggedIn={ctx.isLoggedIn}>
              <Messages />
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
