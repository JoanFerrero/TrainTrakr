import api from "./api"

const ChairsService = {
  getAllChairs() {
    return api().get("/chairs");
  },
  createChairs(data) {
    return api().post("/chairs", data);
  },
  getOneChairs(slug) {
    return api().get("/chairs/" + slug);
  },
  updateOneChairs(slug, data) {
    return api().put("/chairs/" + slug, data);
  },
  deleteOneChairs(slug) {
    return api().delete("/chairs/" + slug)
  }
};

export default ChairsService;