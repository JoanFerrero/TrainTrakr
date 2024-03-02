from django.db import models
from users.models import User
from stations.models import Chair

# Create your models here.

class Rent(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    chair = models.ForeignKey(Chair, on_delete=models.CASCADE, null=False)
    date = models.CharField(max_length=100)

