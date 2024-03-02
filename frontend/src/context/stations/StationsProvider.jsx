import React, { useReducer } from "react";
import PropTypes from 'prop-types'
import StationsReducer from './StationsReducer'
export const StationsContext = React.createContext();

const initialState = {
  stations: [],
}

export function StationsProvider(props) {
  const [StationsState, StationsDispatch] = useReducer(StationsReducer, initialState);
  const value = React.useMemo(() => ({StationsState, StationsDispatch}), [
    StationsState,
  ]);

  return (
    <StationsContext.Provider value={value}>
      {props.children}
    </StationsContext.Provider>
  );
}

StationsProvider.propTypes = {
  children: PropTypes.node.isRequired
}
