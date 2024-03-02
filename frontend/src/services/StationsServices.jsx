import api from "./api"

const StationsService = {
  getAllStations() {
    return api().get("/stations");
  },
  createStations(data) {
    return api().post("/stations", data);
  },
  getOneStation(slug) {
    return api().get("/stations/" + slug);
  },
  updateOneStation(slug, data) {
    return api().put("/stations/" + slug, data);
  },
  deleteOneStation(slug) {
    return api().delete("/stations/" + slug)
  }
};

export default StationsService;