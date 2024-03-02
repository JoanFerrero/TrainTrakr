from django.urls import path
from .views import RentView

urlpatterns = [

    # RENT
    path('rent/<str:slug>', RentView.as_view({'post': 'rent'})),
    path('rents', RentView.as_view({'get': 'viewRent'})),
  
]