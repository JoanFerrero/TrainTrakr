from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import JSONParser 
from .serializers import UserSerializer, ProfileSerializer
from rest_framework.permissions import (AllowAny, IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser)
from rest_framework.exceptions import NotFound


# Create your views here.

class UserView(viewsets.GenericViewSet):

    def register(self, request):
        user = JSONParser().parse(request)

        if user['email'] is None:
            raise NotFound("Email is requered!")
        
        if user['username'] is None:
            raise NotFound("username is requered!")
        
        if user['type_register'] == "email":
            if user['password'] is None:
                raise NotFound("Password is requered!")
            
        serializer_context = {
            'email': user['email'],
            'password': user['password'],
            'username': user['username'],
            'type_register': user['type_register']
        }
        
        if user['password'] == "0" and user['type_register'] != "email":
            serializer = UserSerializer.register_firebase(serializer_context)
            ProfileSerializer.create(context=serializer['user'])
            return Response("Register Firebase")

        serializer = UserSerializer.register(serializer_context)

        ProfileSerializer.create(context=serializer['user'])

        return Response("Register Email")
    
    def login(self, request):
        user = JSONParser().parse(request)

        if user['type_register'] == "email":
            if user['password'] is None:
                raise NotFound("Password is requered!")
            
        if user['email'] is None:
            raise NotFound("Email is requered!")
        
        serializer_context = {
            'email': user['email'],
            'password': user['password'],
            'type_register': user['type_register']
        }
        
        if user['password'] == "0":
            if user['type_register'] == "google" or user['type_register'] == "github":
                serializer = UserSerializer.login_firebase(serializer_context)
                return Response(serializer)

        serializer = UserSerializer.login(user)

        return Response(serializer)
    
class UserInfoView(viewsets.GenericViewSet):
    permission_classes = (IsAuthenticated ,)

    def getUser(self, request):
        username = request.user
        serializer_context = { 'username': username }
        serializer = UserSerializer.getUser(context=serializer_context)
        return Response(serializer)