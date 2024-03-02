import api from "./api"

const RentService = {
  getAllRentUser() {
    return api().get("/rents");
  },
  getAllRentAdmin() {
    return api().get("/rents");
  },
  postRent(slug) {
    return api().post("/rent/" + slug);
  },
};

export default RentService;