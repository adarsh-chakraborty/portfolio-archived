import React, { useReducer } from 'react';
import AppContext from './app-context';

const defaultState = {
  token: null,
  isLoggedIn: false
};

const reducerAction = (state, payload) => {
  switch (payload.type) {
    case 'login':
      return { token: payload.token, isLoggedIn: true };
    case 'logout':
      return { token: null, isLoggedIn: false };
    default:
      return defaultState;
  }
};
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerAction, defaultState);

  const login = (token) => {
    dispatch({ type: 'login' }, token);
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  const appContext = {
    token: state.token,
    login,
    logout
  };
  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
};

export default ContextProvider;
