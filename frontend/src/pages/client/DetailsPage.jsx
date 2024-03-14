import { useEffect } from "react";
import DetailsMain from "../../components/client/details/DetailsMain";
import { useTrips } from "../../hooks/useTrips";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { useOneTrain, trip} = useTrips();
  const { slug } = useParams();

  useEffect(() => {
    useOneTrain(slug)
  }, [])

  return (
    trip !== undefined ? (
      <DetailsMain trip={trip}/>
    ): (
      <h1>Cargando</h1>
    )
  )
}
  
export default DetailsPage