import api from "./api"

const TrainsService = {
  getAllTrains() {
    return api().get("/trains");
  },
  createTrains(data) {
    return api().post("/trains", data);
  },
  getOneTrains(slug) {
    return api().get("/trains/" + slug);
  },
  updateOneTrains(slug, data) {
    return api().put("/trains/" + slug, data);
  },
  deleteOneTrains(slug) {
    return api().delete("/trains/" + slug)
  }
};

export default TrainsService;