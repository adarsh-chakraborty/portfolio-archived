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
      return {
        ...state,
        loginError: payload.loginError,
        isLoggedIn: false,
        loading: false
      };
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

  // axios.interceptors.request.use((config) => {
  //   if (state.token) {
  //     config.headers.Authorization = `Bearer ${state.token}`;
  //   }
  //   return config;
  // });

  useEffect(() => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const response = await axios.post('/token', {});
            const newAccessToken = response.data.token;
            // previous token
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            login(newAccessToken);
            return axios(originalRequest);
          } catch (error) {
            console.log(error);
            logout();
          }
        }
        return Promise.reject(error);
      }
    );
  }, []);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.post('/token', {});
        login(res.data.token);
      } catch (err) {
        console.log(err);
        loginError("You're not logged in");
      }
    };
    checkLogin();
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
      {state.loading ? (
        <div className="w-screen h-screen flex items-center bg-green-100 text-center mx-auto">
          <img
            src="/android-chrome-192x192.png"
            alt="A"
            className="w-[6rem] shadow-md animate-bounce mx-auto "
          />
        </div>
      ) : (
        children
      )}
    </AppContext.Provider>
  );
};

export default ContextProvider;
