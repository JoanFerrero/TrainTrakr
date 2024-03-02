from rest_framework import serializers
from .models import Trips
from stations.models import Station, Train, Chair
from stations.serializers import ChairSerializer, StationSerializer, TrainSerializer

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trips
        fields = ('id', 'exit_station_id', 'arrival_station_id', 'train_id', 'date', 'time')
    
    def to_Trips(instance):
        return {
            'id': instance.id,
            'exit_station_id': instance.exit_station_id,
            'arrival_station_id': instance.arrival_station_id,
            'train_id': instance.train_id,
            'date': instance.date,
            'time': instance.time,
        }
    
    def trip(context):

        if context['arrival_station'] == context['exit_station']:
            raise serializers.ValidationError('*Station exit == arrival.')
        
        try:
            arrival_station = Station.objects.get(slug=context['arrival_station'])
            exit_station = Station.objects.get(slug=context['exit_station'])
        except:
            raise serializers.ValidationError('*Station not found.')
        
        try:
            train = Train.objects.get(slug=context['train'])
        except:
            raise serializers.ValidationError('*Train not found.')
        
        if train.status == 'no activo':
            raise serializers.ValidationError('*Train not active.')
        
        if arrival_station.status == 'no activo' or exit_station.status == 'no activo':
            raise serializers.ValidationError('*Station not active.')
        
        train.status = 'no activo'
        train.save()

        trips = Trips.objects.create(
            exit_station_id = exit_station.id,
            arrival_station_id = arrival_station.id,
            train_id = train.id,
            date = context['date'],
            time = context['time']
        )
        trips.save()

        return {
            'exit_station': exit_station.name,
            'arrival_station': arrival_station.name,
            'train': train.name,
            'date': context['date'],
            'time': context['time']
        }
    
    def allTrips(context):
        try:
            trips = Trips.objects.all()  
        except:
            raise serializers.ValidationError('*Trip not found.')
        
        return trips
    
class TripSerializerOne(serializers.ModelSerializer):
    class Meta:
        model = Trips
        fields = ('id', 'exit_station', 'arrival_station', 'train','chairs' 'date', 'time')

    def to_OneTrip(instance):

        try:
            chair = Chair.objects.filter(train=instance.train_id)
            chair_serializer = ChairSerializer(chair, many=True)

            exit_station = Station.objects.get(id=instance.exit_station_id)
            exit_station_serialazer = StationSerializer(exit_station)

            arrival_station = Station.objects.get(id=instance.arrival_station_id)
            arrival_station_serialazer = StationSerializer(arrival_station)
        except:
            raise serializers.ValidationError('*Not found.')
        
        return {
            'id': instance.id,
            'exit_station': exit_station_serialazer.data,
            'arrival_station': arrival_station_serialazer.data,
            'train': instance.train_id,
            'chairs': chair_serializer.data,
            'date': instance.date,
            'time': instance.time,
        }
    
    def oneTrip(context):
        try:
            trip = Trips.objects.get(id=context)    
        except:
            raise serializers.ValidationError('*Trip not found.')

        return trip
