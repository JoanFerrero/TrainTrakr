import React, { useReducer } from "react";
import PropTypes from 'prop-types'
import TrainsReducer from './TrainsReducer'
export const TrainsContext = React.createContext();

const initialState = {
  trains: [],
}


export function TrainsProvider(props) {
  const [TrainsState, TrainsDispatch] = useReducer(TrainsReducer, initialState);
  const value = React.useMemo(() => ({TrainsState, TrainsDispatch}), [
    TrainsState,
  ]);

  return (
    <TrainsContext.Provider value={value}>
      {props.children}
    </TrainsContext.Provider>
  );
}

TrainsProvider.propTypes = {
  children: PropTypes.node.isRequired
}
