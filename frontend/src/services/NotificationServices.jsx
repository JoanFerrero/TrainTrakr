import api from "./api"

const NotificationService = {
  getNotification(){
    return api().get("/notifications");
  },
  updateNotification(id) {
    return api().put("/notifications/" + id);
  },
  deleteNotification() {
    return api().get("/notifications");
  },
}

export default NotificationService;