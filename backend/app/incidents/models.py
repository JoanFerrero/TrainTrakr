from django.db import models
from users.models import User
from stations.models import Train, Chair

class IncidenceTrain(models.Model):

    title = models.CharField(max_length=25)
    status = models.CharField(max_length=100, default='pending')
    desc = models.CharField(max_length=300)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_incident")
    train = models.ForeignKey(Train, on_delete=models.CASCADE, related_name="train_affected")

    def __str__(self):
        return str(self.id)

class IncidenceChair(models.Model):

    title = models.CharField(max_length=25)
    status = models.CharField(max_length=100, default='pending')
    desc = models.CharField(max_length=300)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="incident_user")
    chair = models.ForeignKey(Chair, on_delete=models.CASCADE, related_name="chair_affected")

    def __str__(self):
        return str(self.id)

class Notification(models.Model):

    seen = models.BooleanField(default=False)
    desc = models.CharField(max_length=300)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user_notification")

    def __str__(self):
        return str(self.id)