import api from "./api"

const IncidentsService = {
  getIncidentTrain() {
    return api().get('incidenttget');
  },
  postIncidentTrain(data) {
    return api().post('incidentt', data);
  },
  getIncidentChair() {
    return api().get('incidentscget');
  },
  postIncidentChair(data) {
    return api().post('incidentsc', data);
  },
  getAllIncidentsTrain(){
    return api().get('alltrainincidents')
  },
  getAllIncidentsChair(){
    return api().get('allchairincidents')
  },
  getOneIncidentTrain(id) {
    return api().get('incidenttget/' + id)
  },
  getOneIncidentChair(id) {
    return api().get('incidentscget/' + id)
  },
  putIncidentTrain(id, data) {
    return api().put('updatetrainincident/' + id, data)
  },
  putIncidentChair(id, data) {
    return api().put('updatechairincident/' + id, data)
  }
};

export default IncidentsService;