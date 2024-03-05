import ListTrips from "../../components/client/lists/ListTrips";
import Map from "../../components/client/map/Map";
const TripsPage = () => {
  return (
    <>
      <div className="flex">
        <div className="w-full min-[1220px]:w-1/2 overflow-hidden">
          <ListTrips elementsPag={4}/>
        </div>
        <div className="hidden min-[1220px]:block w-1/2"> 
          <Map />
        </div>
      </div>
    </>
  )
}
  
export default TripsPage