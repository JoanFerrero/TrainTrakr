from django.db import models
from users.models import User
from stations.models import Train, Station

# Create your models here.

class Trips(models.Model):
    exit_station = models.ForeignKey(Station, on_delete=models.CASCADE, related_name="exit_station")
    arrival_station = models.ForeignKey(Station, on_delete=models.CASCADE, related_name="arrival_station")
    train = models.ForeignKey(Train, on_delete=models.CASCADE, null=False)
    date = models.CharField(max_length=100)
    time = models.IntegerField()
