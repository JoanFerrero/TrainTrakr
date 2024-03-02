import React, { useReducer } from "react";
import PropTypes from 'prop-types'
import TripsReducer from './TripsReducer'
export const TripsContext = React.createContext();

const initialState = {
  trips: [],
  station_filter: false,
}


export function TripsProvider(props) {
  const [TripsState, TripsDispatch] = useReducer(TripsReducer, initialState);
  const value = React.useMemo(() => ({TripsState, TripsDispatch}), [
    TripsState,
  ]);

  return (
    <TripsContext.Provider value={value}>
      {props.children}
    </TripsContext.Provider>
  );
}

TripsProvider.propTypes = {
  children: PropTypes.node.isRequired
}