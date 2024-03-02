from django.shortcuts import render
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser)
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import JSONParser 
from .serializers import TripSerializer, TripSerializerOne
from .models import Trips

# Create your views here.

class TripViewAdmin(viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated ,)

    def createTrip(self, request):
        trip = JSONParser().parse(request)
        trip_final = TripSerializer.trip(context=trip)
        return Response(trip_final)
    
class TripView(viewsets.GenericViewSet):
    
    def viewTrip(self, request):
        trips = Trips.objects.all()
        trips_serializer = TripSerializer(trips, many=True)
        return Response(trips_serializer.data)
    
    def viewTripF(self, request, id):
        trips = Trips.objects.filter(exit_station_id=id)
        trips_serializer = TripSerializer(trips, many=True)
        return Response(trips_serializer.data)
    
    def viewOneTrip(self, request, id):
        trips = TripSerializerOne.oneTrip(id)
        return Response(TripSerializerOne.to_OneTrip(trips))

