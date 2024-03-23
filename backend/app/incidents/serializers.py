from rest_framework import serializers
from .models import IncidenceChair, IncidenceTrain, Notification
from stations.models import Train, Chair
from users.models import User
from users.serializers import UserSerializer

class IncidentsTrainSerializer(serializers.ModelSerializer):
    class Meta:
        model = IncidenceTrain
        fields = ( 'id', 'title', 'status', 'desc', 'train_id', 'user_id')

    def to_incidence_train(instance):
        return ({
            "id": instance.id,
            "title": instance.title,
            "status": instance.status,
            "desc": instance.desc,
            "user": instance.user_id,
            "train": instance.train_id
        })

    def getIncidents(context):
        username = context['username']

        try:
            user = User.objects.get(username=username)
        except:
            raise serializers.ValidationError('*User not found.')
        
        try:
            incidents = IncidenceTrain.objects.filter(user=user.id)
        except:
            raise serializers.ValidationError('*User not found.')
        
        objetos_serializados = []
        
        for incident in incidents:
            datos_serializados = {
                'id': incident.id,
                'title': incident.title,
                'status': incident.status,
                'desc': incident.desc,
            }
            objetos_serializados.append(datos_serializados)
        
        return objetos_serializados
        

    def incident(context, incident):

        try:
            train = Train.objects.get(slug=incident['train'])

        except:
            raise serializers.ValidationError('*Train not found.')
        
        try:
            user = User.objects.get(username=context['username'])

        except:
            raise serializers.ValidationError('*User not found.')
        
        title = incident['title']
        desc = incident['desc']
        
        incident = IncidenceTrain.objects.create(
            title = title,
            status = 'pending',
            desc = desc,
            train_id = train.id,
            user_id = user.id
        )
        return {
            'title': title,
            'status': 'pending',
            'desc': desc,
        }
    
    def updateStatus(context, id):
        new_status = context['status']
        incidence = IncidenceTrain.objects.get(id=id)

        if incidence is None:
            raise serializers.ValidationError('Incident not found')

        if (incidence.status == 'resolved'):    
            raise serializers.ValidationError('The incidence is already resolved')

        if (new_status == 'pending'):
            incidence.status = 'pending'
        elif (new_status == 'in_progress'):
            incidence.status = 'in_progress'
            Notification.objects.create(desc="Incidencia: " + str(incidence.title) + ", esta en proceso.", user_id=incidence.user_id, seen=False)
        elif (new_status == 'resolved'):
            incidence.status = 'resolved'
            Notification.objects.create(desc="Incidencia: " + str(incidence.title) + ", esta resuelta. Thank you!", user_id=incidence.user_id, seen=False)
        else:
            raise serializers.ValidationError('The incidence is closed')

        incidence.save()
        return incidence


class IncidentsChairSerializer(serializers.ModelSerializer):
    class Meta:
        model = IncidenceChair
        fields = ( 'id', 'title', 'status', 'desc', 'user', 'chair_id', 'user_id')

    def to_incidence_chair(instance):
        return ({
            "id": instance.id,
            "title": instance.title,
            "status": instance.status,
            "desc": instance.desc,
            "user": instance.user_id,
            "chair": instance.chair_id
        })
    
    def getIncidents(context):
        username = context['username']

        try:
            user = User.objects.get(username=username)
        except:
            raise serializers.ValidationError('*User not found.')
        
        try:
            incidents = IncidenceChair.objects.filter(user=user.id)
        except:
            raise serializers.ValidationError('*User not found.')
        
        objetos_serializados = []
        
        for incident in incidents:
            datos_serializados = {
                'id': incident.id,
                'title': incident.title,
                'status': incident.status,
                'desc': incident.desc,
            }
            objetos_serializados.append(datos_serializados)
        
        return objetos_serializados

    def incident(context, incident):

        try:
            chair = Chair.objects.get(slug=incident['chair'])

        except:
            raise serializers.ValidationError('*Train not found.')

        try:
            user = User.objects.get(username=context['username'])

        except:
            raise serializers.ValidationError('*User not found.')
        
        title = incident['title']
        desc = incident['desc']
        
        incident = IncidenceChair.objects.create(
            title = title,
            status = 'pending',
            desc = desc,
            chair_id = chair.id,
            user_id = user.id
        )
        return {
            'title': title,
            'status': 'pending',
            'desc': desc,
        }

    def updateStatus(context, id):
        new_status = context['status']
        incidence = IncidenceChair.objects.get(id=id)

        if incidence is None:
            raise serializers.ValidationError('Incident not found')

        if (incidence.status == 'resolved'):    
            raise serializers.ValidationError('The incidence is already resolved')

        if (new_status == 'pending'):
            incidence.status = 'pending'
        elif (new_status == 'in_progress'):
            incidence.status = 'in_progress'
            Notification.objects.create(desc="Incidencia: " + str(incidence.title) + ", esta en proceso.", user_id=incidence.user_id, seen=False)
        elif (new_status == 'resolved'):
            incidence.status = 'resolved'
            Notification.objects.create(desc="Incidencia: " + str(incidence.title) + ", esta resuelta. Gracias!", user_id=incidence.user_id, seen=False)
        else:
            raise serializers.ValidationError('The incidence is closed')

        incidence.save()
        return incidence
    
class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ( 'id', 'seen', 'desc', 'user')

    def to_notification(instance):
        return ({
            "id": instance.id,
            "desc": instance.desc,
            "seen": instance.seen
        })

    def getNotification(context):
        try:
            user = User.objects.get(username=context['username'])
        except:
            raise serializers.ValidationError('*User not found.')
        
        notifications = Notification.objects.filter(user_id=user.id)

        objetos_serializados = []
        
        for notification in notifications:
            datos_serializados = {
                'id': notification.id,
                'seen': notification.seen,
                'desc': notification.desc,
                'user': notification.user_id
            }
            objetos_serializados.append(datos_serializados)
        
        return objetos_serializados
    
    def seeNotification(context):
        notification_id = context['id']
        username = context['username']

        user = User.objects.get(username=username)
        if user is None:
            raise serializers.ValidationError('User is not found')

        notification = Notification.objects.get(pk=notification_id, user_id=user.id, seen=False)
        if notification is None:
            raise serializers.ValidationError('Notification not found')

        notification.seen = True
        notification.save()

        return notification
    
    def deleteNotification(context):
        try:
            user = User.objects.get(username=context['username'])
        except:
            raise serializers.ValidationError('*User not found.')
        
        try:
            incident = IncidenceChair.objects.get(id=context['slug'], user_id=user.id)
            incident.delete()
        except:
            raise serializers.ValidationError('*Notification not found.')
        
        return {'data': 'Incident deleted successfully'}
