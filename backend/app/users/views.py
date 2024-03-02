from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import JSONParser 
from .serializers import UserSerializer, ProfileSerializer
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser)


# Create your views here.

class UserView(viewsets.GenericViewSet):

    def register(self, request):
        user = JSONParser().parse(request)

        serializer = UserSerializer.register(user)

        ProfileSerializer.create(context=serializer['user'])

        return Response(serializer)
    
    def login(self, request):
        user = JSONParser().parse(request)

        serializer = UserSerializer.login(user)

        return Response(serializer)
    
class UserInfoView(viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated ,)

    def getUser(self, request):
        username = request.user
        serializer_context = { 'username': username }
        serializer = UserSerializer.getUser(context=serializer_context)
        return Response(serializer)