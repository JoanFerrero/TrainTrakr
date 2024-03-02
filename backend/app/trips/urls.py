from django.urls import path
from .views import TripView, TripViewAdmin

urlpatterns = [

    # RENT
    path('trip', TripViewAdmin.as_view({'post': 'createTrip'})),
    path('trips', TripView.as_view({'get': 'viewTrip'})),
    path('tripsF/<str:id>', TripView.as_view({'get': 'viewTripF'})),
    path('trips/<str:id>', TripView.as_view({'get': 'viewOneTrip'})),
]