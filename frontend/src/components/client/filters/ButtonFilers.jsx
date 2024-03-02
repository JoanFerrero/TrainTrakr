import { TripsContext } from '../../../context/trips/TripsProvider'
import { useContext } from 'react';
import { useContextHook } from '../../../hooks/useContextHook';
const ButtonFilters = () => {
  const { TripsState } = useContext(TripsContext);
  const { useChangeFiler } = useContextHook();

  const removeFiler = (id) => {
    useChangeFiler(id)
  }

  const button = TripsState.station_filter === true ? (
    <button class="btn btn-dark" onClick={() => removeFiler('')}>Borrar Filtro</button>
  ) : (<></>);
  return (
    <div className="col-md-6 mt-3 mb-3 mr-3 ml-3 pr-3 mx-2">
      {button}
    </div>
  )
}

export default ButtonFilters;