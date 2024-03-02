from django.urls import path
from .views import UserView, UserInfoView

urlpatterns = [
  
    # Users
    path('register', UserView.as_view({'post':'register'})),
    path('login', UserView.as_view({'post': 'login'})),
    path('user', UserInfoView.as_view({'get': 'getUser'})),
]