from rest_framework import serializers
from .models import Station, Train, Chair
from random import randint

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = ['id', 'slug', 'name', 'desc', 'image', 'status']

    def to_station(self, instance):
        return {
            "id": instance.id,
            "slug": instance.slug,
            "name": instance.name,
            "desc": instance.desc,
            "image": instance.image,
            "status": instance.status,
        }
    
class TrainSerializer(serializers.ModelSerializer):
    class Meta:
        model = Train
        fields = ['id', 'slug', 'name', 'desc', 'image', 'status']

    def to_train(self, instance):
        return {
            "id": instance.id,
            "slug": instance.slug,
            "name": instance.name,
            "desc": instance.desc,
            "image": instance.image,
            "status": instance.status,
        }
    
class ChairSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chair
        fields = ['id', 'slug','name', 'image', 'status', 'type', 'train', 'chair_number']

    def to_chair(instance):
        return {
            "id": instance.id,
            "slug": instance.slug,
            "name": instance.name,
            "image": instance.image,
            "status": instance.status,
            "type": instance.type,
            "train": instance.train,
            "chair_number": instance.chair_number,
        }