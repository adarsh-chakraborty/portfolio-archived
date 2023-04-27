import React, { useReducer, useEffect } from 'react';
import AppContext from './app-context';
import axios from '../api/axios';

const defaultState = {
  token: null,
  isLoggedIn: false,
  loading: true,
  login: () => {},
  logout: () => {}
};

const reducerAction = (state, payload) => {
  switch (payload?.type) {
    case 'login':
      return {
        ...state,
        token: payload.token,
        isLoggedIn: true,
        loading: false
      };
    case 'logout':
      return { ...state, token: null, isLoggedIn: false, loading: false };
    case 'loginError':
      return { ...state, loginError: payload.loginError, loading: false };
    default:
      return defaultState;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerAction, defaultState);

  const login = (token) => {
    dispatch({ type: 'login', token });
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  const loginError = (msg) => {
    dispatch({ type: 'loginError', loginError: msg });
  };

  useEffect(() => {
    let isMounted = true;
    axios
      .post('/token', {})
      .then((res) => {
        if (isMounted) {
          console.log('Dispatching Login');
          login(res.data.token);
        }
      })
      .catch((err) => {
        if (isMounted) {
          let errMsg = err?.response?.data?.error
            ? err.response.data.error
            : 'Authentication Failed';
          loginError(errMsg);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const appContext = {
    token: state.token,
    isLoggedIn: state.isLoggedIn,
    loading: state.loading,
    loginError: state.loginError,
    login,
    logout
  };
  return (
    <AppContext.Provider value={appContext}>
      {state.loading ? <div>Loading...</div> : children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
