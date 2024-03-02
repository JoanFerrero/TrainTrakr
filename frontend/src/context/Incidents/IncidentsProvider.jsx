import React, { useReducer } from "react";
import PropTypes from 'prop-types'
import IncidentsReducer from './IncidentsReducer'
export const IncidentsContext = React.createContext();

const initialState = {
  incidentsTrain: [],
  incidentsChair: [],
}

export function IncidentsProvider(props) {
  const [IncidentsState, IncidentsDispatch] = useReducer(IncidentsReducer, initialState);
  const value = React.useMemo(() => ({IncidentsState, IncidentsDispatch}), [
    IncidentsState,
  ]);

  return (
    <IncidentsContext.Provider value={value}>
      {props.children}
    </IncidentsContext.Provider>
  );
}

IncidentsProvider.propTypes = {
  children: PropTypes.node.isRequired
}
