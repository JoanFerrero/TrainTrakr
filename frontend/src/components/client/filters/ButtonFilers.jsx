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
    <button 
      className="bg-green-50 focus:outline-none focus:shadow-outline border border-blue-900 rounded-full py-2 px-4 block appearance-none leading-normal ml-2"
      onClick={() => removeFiler('')}
    >
      Borrar Filtros
    </button>
  ) : (<></>);
  return (
    <div className="m-4">
      {button}
    </div>
  )
}

export default ButtonFilters;