import React, { useReducer, useState } from "react";
import PropTypes from 'prop-types'
import AuthReducer from './AuthReducer'
import JwtService from "../../services/JwtService";
import AuthService from "../../services/AuthServices";

export const AuthContext = React.createContext();

let initialState = {
  user: {},
  token: '',
  isAuth: false,
  isAdmin: false,
  dashboard: false,
}

export function AuthProvider(props) {
  const [token, setToken] = useState(JwtService.getToken ? JwtService.getToken : false);
  if (token) {
    AuthService.getUser()
      .then(({ data, status }) => {
          if (status === 200) {
            initialState.user = data.user
            initialState.token = data.token
            initialState.isAuth = true
            initialState.isAdmin = data.user.type === 'admin'
          }
      })
      .catch(e => console.error(e));
  }
  const [AuthState, AuthDispatch] = useReducer(AuthReducer, initialState);
  const value = React.useMemo(() => ({AuthState, AuthDispatch}), [
    AuthState,
  ]);

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}