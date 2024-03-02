import React, { useReducer } from "react";
import PropTypes from 'prop-types'
import NotificationsReducer from './NotificationsReducer'
export const NotificationsContext = React.createContext();

const initialState = {
  notifications: [],
  notificationsNotSeen: [],
  countNotSeen: 0
}

export function NotificationsProvider(props) {
  const [NotificationsState, NotificationsDispatch] = useReducer(NotificationsReducer, initialState);
  const value = React.useMemo(() => ({NotificationsState, NotificationsDispatch}), [
    NotificationsState,
  ]);

  return (
    <NotificationsContext.Provider value={value}>
      {props.children}
    </NotificationsContext.Provider>
  );
}

NotificationsProvider.propTypes = {
  children: PropTypes.node.isRequired
}
