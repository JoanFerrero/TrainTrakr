from django.urls import path
from .views import IncidentsTrain, IncidentsChair, IncidentsViewAdmin, NotificationsUser

urlpatterns = [
    # INCIDENTS TRAINS
    path('incidenttget', IncidentsTrain.as_view({'get': 'getIncidents'})),
    path('incidenttget/<str:id>', IncidentsTrain.as_view({'get': 'getOneIncidents'})),
    path('incidentt', IncidentsTrain.as_view({'post': 'postIncident'})),
    path('incidenttdelet/<str:slug>', IncidentsTrain.as_view({'delete': 'deletIncident'})),

    # INCIDENTS CHAIRS
    path('incidentscget', IncidentsChair.as_view({'get': 'getIncidents'})),
    path('incidentscget/<str:id>', IncidentsChair.as_view({'get': 'getOneIncidents'})),
    path('incidentsc', IncidentsChair.as_view({'post': 'postIncident'})),
    path('incidentsc/<str:slug>', IncidentsChair.as_view({'delete': 'deletIncident'})),

    # INCIDENTS ADMIN TRAINS
    path('alltrainincidents', IncidentsViewAdmin.as_view({'get': 'getAllIncidentsTrains'})),
    path('updatetrainincident/<str:id>', IncidentsViewAdmin.as_view({"put": "updateIncidentsTrains"})),
    path('deletetrainincidents', IncidentsViewAdmin.as_view({'delete': 'deleteIncidentsTrains'})),

    # VIEW INCIDENTS ADMIN CHAIRS
    path('allchairincidents', IncidentsViewAdmin.as_view({'get': 'getAllIncidentsChairs'})),
    path('updatechairincident/<str:id>', IncidentsViewAdmin.as_view({"put": "updateIncidentsChairs"})),
    path('deletechairincidents', IncidentsViewAdmin.as_view({'delete': 'deleteIncidentsChairs'})),

    # NOTIFICATION
    path('notifications', NotificationsUser.as_view({'get': 'getNotifications'})),
    path('notifications/<str:id>', NotificationsUser.as_view({'put': 'seenNotification'})),
    path('notifications/<str:id>', NotificationsUser.as_view({'delete': 'deleteNotification'})),
]