from django.urls import path
from .views import StationView, TrainView, ChairView

urlpatterns = [
  
    # Stations
    path('stations', StationView.as_view({'get': 'getStations'})),
    path('stations/<str:slug>', StationView.as_view({'get': 'getOneStation'})),
    path('stations', StationView.as_view({'post': 'post'})),
    path('stations/<str:slug>', StationView.as_view({'put': 'put'})),
    path('stations/<str:slug>', StationView.as_view({'delete': 'delete'})),

    # Train
    path('trains', TrainView.as_view({'get': 'getTrains' })),
    path('trains/<str:slug>', TrainView.as_view({'get': 'getOneTrain'})),
    path('trains', TrainView.as_view({'post': 'post'})),
    path('trains/<str:slug>', TrainView.as_view({'put': 'put'})),
    path('trains/<str:slug>', TrainView.as_view({'delete': 'delete'})),

    # Chair
    path('chairs', ChairView.as_view({'get': 'getChairs' })),
    path('chairs/<str:slug>', ChairView.as_view({'get': 'getOneChair'})),
    path('chairs', ChairView.as_view({'post': 'post'})),
    path('chairs/<str:slug>', ChairView.as_view({'put': 'put'})),
    path('chairs/<str:slug>', ChairView.as_view({'delete': 'delete'})),
]