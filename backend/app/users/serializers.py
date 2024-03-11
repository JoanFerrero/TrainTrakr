from rest_framework import serializers
from .models import User, Profile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ( 'id', 'uuid', 'username', 'email', 'password', 'type', 'is_superuser', 'chairs')

    def register(context):
        username = context['username']
        email = context['email']
        password = context['password']
        type_register = context['type_register']

        username_exist = len(User.objects.filter(username=username))
        email_exist = len(User.objects.filter(email=email))

        if (email_exist > 0 or username_exist > 0):
            raise serializers.ValidationError('*Username or email already exists.')

        user = User.objects.create_user(email=email, username=username, password=password, type_register=type_register)
        
        return {
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'type': user.type,
                'type_register': user.type_register
            },
            'token': user.token,
            'ref_token': user.ref_token,
        }
    
    def register_firebase(context):

        username = context['username']
        email = context['email']
        type_register = context['type_register']

        username_exist = len(User.objects.filter(username=username))
        email_exist = len(User.objects.filter(email=email))

        if (email_exist > 0 or username_exist > 0):
            raise serializers.ValidationError('*Username or email already exists.')

        user = User.objects.create_user_firebase(email=email, username=username, type_register=type_register)
        
        return {
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'type': user.type,
                'type_register': user.type_register
            },
            'token': user.token,
            'ref_token': user.ref_token,
        }


    
    def login(context):
        email = context['email']
        password = context['password']

        try:
            user = User.objects.get(email=email)
        except:
            raise serializers.ValidationError('*User not found.')

        if not user.check_password(password):
            raise serializers.ValidationError('*Wrong email or password.')
        

        return {
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'type': user.type
            },
            'chairs': {},
            'token': user.token,
            'ref_token': user.ref_token,
        }
    
    def getUser(context):
        username = context['username']

        try:
            user = User.objects.get(username=username)
        except:
            raise serializers.ValidationError('*User not found.')

        return {
            'user': {
                'id': user.id,
                'username': user.username,
                'email': user.email,
                'type': user.type
            },
            'chairs': {},
            'token': user.token,
            'ref_token': user.ref_token,
        }
    
class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ['id', 'user', 'name', 'surnames', 'image', 'biography']

    def to_Profile(instance):
        return {
            "id": instance.id,
            "user": instance.user,
            "name": instance.name,
            "surnames": instance.surnames,
            "image": instance.image,
            "biography": instance.biography,
        }
    
    def create(context):
        user_id = context['id']
        user = User.objects.get(pk=user_id)

        if user is None:
            raise serializers.ValidationError('User not found')

        profile = Profile.objects.create(
            user_id=user_id, 
            name=user.username, 
            image="https://avatars.dicebear.com/api/adventurer/" + context['username'] + ".svg",
            biography="")

        profile.save()
        return profile
