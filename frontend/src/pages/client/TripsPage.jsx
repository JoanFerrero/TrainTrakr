import ListTrips from "../../components/client/lists/ListTrips";
import Map from "../../components/client/map/Map";
const TripsPage = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm">
          <ListTrips />
        </div>
        <div className="col-sm">
          <Map />
        </div>
      </div>
    </>
  )
}
  
export default TripsPage