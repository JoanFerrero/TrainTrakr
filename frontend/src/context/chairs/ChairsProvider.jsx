import React, { useReducer } from "react";
import PropTypes from 'prop-types'
import ChairsReducer from './ChairsReducer'
export const ChairsContext = React.createContext();

const initialState = {
  chairs: [],
}

export function ChairsProvider(props) {
  const [ChairsState, ChairsDispatch] = useReducer(ChairsReducer, initialState);
  const value = React.useMemo(() => ({ChairsState, ChairsDispatch}), [
    ChairsState,
  ]);

  return (
    <ChairsContext.Provider value={value}>
      {props.children}
    </ChairsContext.Provider>
  );
}

ChairsProvider.propTypes = {
  children: PropTypes.node.isRequired
}
