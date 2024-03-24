import ListTrips from "../../components/client/lists/ListTrips";
import Map from "../../components/client/map/Map";
import MapMovile from "../../components/client/map/MapMovile";
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
        <div className="min-h-screen flex min-[1220px]:hidden flex-col justify-between">
          <MapMovile />
        </div>
      </div>
    </>
  )
}
  
export default TripsPage