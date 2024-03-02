import api from "./api"

const TripsService = {
  getAllTrips() {
    return api().get("/trips");
  },
  getAllTripsFiler(id) {
    return api().get("/tripsF/" + id);
  },
  getOneTrip(id) {
    return api().get("/trips/" + id);
  },
  createTrip(data) {
    return api().post("/trip", data)
  }
};

export default TripsService;