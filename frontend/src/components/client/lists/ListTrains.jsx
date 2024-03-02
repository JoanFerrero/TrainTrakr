import {useContext} from "react";
import CardTrains from './CardTrains'
import Search from "../Search";
import { TrainsContext } from "../../../context/trains/TrainsProvider";

const ListTrains = () => {

  const { TrainsState } = useContext(TrainsContext);

  return (
    <>
      <Search />
      {TrainsState.trains.length !== 0 ? (
        TrainsState.trains.map((train) => (
          <CardTrains key={train.id} train={train}/>
        ))
      ) : (
        <h1>No existen Estaciones</h1>
      )}
    </>
  )
};

export default ListTrains;