from django.http import JsonResponse
from django.shortcuts import render
from .serializers import StationSerializer, ChairSerializer, TrainSerializer
from rest_framework.response import Response
from rest_framework.parsers import JSONParser 
from rest_framework import viewsets
from .models import Station, Train, Chair
from rest_framework.permissions import (AllowAny, IsAuthenticated)

class StationView(viewsets.GenericViewSet):

    def getStations(self, request):
        stations = Station.objects.all()
        stations_serializer = StationSerializer(stations, many=True)
        return Response(stations_serializer.data)
    
    def getOneStation(self, request, slug):
        station = Station.objects.get(slug=slug)
        station_serializer = StationSerializer(station)
        return Response(station_serializer.data)
    
    def post(self, request):
        station = JSONParser().parse(request)
        serializer = StationSerializer(data=station)
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()
        return Response(serializer.data)
    
    def put(self, request, slug):
        station = Station.objects.get(slug=slug)
        data = JSONParser().parse(request)
        serializer = StationSerializer(instance=station, data=data, partial=True)
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()
        return Response(serializer.data)

    def delete(self, request, slug):
        station = Station.objects.get(slug=slug)
        station.delete()
        return Response({'data': 'Station deleted successfully'})

class TrainView(viewsets.GenericViewSet):

    def getTrains(self, request):
        trains = Train.objects.all()
        trains_serializer = TrainSerializer(trains, many=True)
        return Response(trains_serializer.data)
    
    def getOneTrain(self, request, slug):
        train = Train.objects.get(slug=slug)
        train_serializer = TrainSerializer(train)
        return Response(train_serializer.data)
    
    def post(self, request):
        train = JSONParser().parse(request)
        serializer = TrainSerializer(data=train)
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()
        return Response(serializer.data)
    
    def put(self, request, slug):
        train = Train.objects.get(slug=slug)
        data = JSONParser().parse(request)
        serializer = TrainSerializer(instance=train, data=data, partial=True)
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()
        return Response(serializer.data)

    def delete(self, request, slug):
        train = Train.objects.get(slug=slug)
        train.delete()
        return Response({'data': 'Train deleted successfully'})

class ChairView(viewsets.GenericViewSet):

    def getChairs(self, request):
        chairs = Chair.objects.all()
        chairs_serializer = ChairSerializer(chairs, many=True)
        return Response(chairs_serializer.data)
    
    def getOneChair(self, request, slug):
        chair = Chair.objects.get(slug=slug)
        chair_serializer = ChairSerializer(chair)
        return Response(chair_serializer.data)
    
    def post(self, request):
        chair = JSONParser().parse(request)
        serializer = ChairSerializer(data=chair)
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()
        return Response(serializer.data)
    
    def put(self, request, slug):
        chair = Chair.objects.get(slug=slug)
        data = JSONParser().parse(request)
        serializer = ChairSerializer(instance=chair, data=data, partial=True)
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()
        return Response(serializer.data)

    def delete(self, request, slug):
        chair = Chair.objects.get(slug=slug)
        chair.delete()
        return Response({'data': 'Chair deleted successfully'})
