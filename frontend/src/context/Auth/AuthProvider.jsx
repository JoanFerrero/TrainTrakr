import React, { useReducer } from "react";
import PropTypes from 'prop-types'
import AuthReducer from './AuthReducer'
export const AuthContext = React.createContext();

const initialState = {
  user: {},
  token: '',
  isAuth: false,
  isAdmin: false,
  dashboard: false,
}

export function AuthProvider(props) {
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