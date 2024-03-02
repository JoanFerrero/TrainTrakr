from rest_framework import serializers
from .models import Rent
from users.models import User
from stations.models import Chair, Train
from trips.models import Trips
from stations.serializers import ChairSerializer, TrainSerializer
from trips.serializers import TripSerializerOne
from datetime import date

class RentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rent
        fields = ( 'id', 'user_id', 'chair_id')

    def rent(context):
        username = context['username']
        slug_chair = context['slug_chair']

        try:
            user = User.objects.get(username=username)
        except:
            raise serializers.ValidationError('*User not found.')
        
        try:
            chair = Chair.objects.get(slug=slug_chair)
        except:
            raise serializers.ValidationError('*User not found.')
        
        if chair.status == 'no activo':
            raise serializers.ValidationError('*Silla no disponible.')
        
        today = date.today()
        chair.status = 'no activo'
        chair.save()
        
        rent = Rent.objects.create(
            user_id = user.id,
            chair_id = chair.id,
            date = today,
        )

        rent.save()
        return {
            'user': user.username,
            'chair': chair.slug,
            'date': today
        }

class RentSerializerAll(serializers.ModelSerializer):
    class Meta:
        model = Rent
        fields = ( 'id', 'user', 'chair', 'train', 'trip')

    def viewRent(context):
        username = context['username']

        try:
            user = User.objects.get(username=username)
        except:
            raise serializers.ValidationError('*User not found.')
        
        try:
            rents = Rent.objects.filter(user_id=user.id)
        except:
            raise serializers.ValidationError('*User not found.')
        
        objetos_serializados = []

        for rent in rents:
            # Buscar el id del tren desde la chair no desde el rent.
            chair = Chair.objects.get(id=rent.chair_id)
            chairserialize = ChairSerializer(chair)

            train = Train.objects.get(id=chair.train_id)
            trainserialize = TrainSerializer(train)

            trip = Trips.objects.get(train_id=train.id)
            tripserialize = TripSerializerOne.to_OneTrip(trip)
            datos_serializados = {
                'id': rent.id,
                'user': rent.user_id,
                'chair': chairserialize.data,
                'train': trainserialize.data,
                'trip': tripserialize,
            }
            objetos_serializados.append(datos_serializados)
        
        return objetos_serializados
            